import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);
  
  const { currentUser } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  console.log(chatId);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userChats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        // const items = res.data()?.chats || [];
        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        // Filter out null or invalid chats
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );
    return () => {
      unSub();
    };
  }, [currentUser.id]);


const handleSelect= async(chat)=>{
changeChat(chat.chatId , chat.user)
}
  

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {chats.length > 0 ? (
        chats.map((chat) => (
          <div
            className="item"
            key={chat.chatId || chat.user?.username}
            onClick={() => handleSelect(chat)}
          >
            <img src={chat.user?.avatar || "./avatar.png"} alt="avatar" />
            <div className="texts">
              <span>{chat.user?.username || "No username"}</span>
              <p>{chat.lastMessage || "No messages yet"}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No chats available</p>
      )}
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
