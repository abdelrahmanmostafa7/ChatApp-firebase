import { useChatStore } from "../../../lib/chatStore";
import { auth } from "../../../lib/firebase";
import { useUserStore } from "../../../lib/userStore";
import "./userInfo.css";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  const { resetChat } = useChatStore();

  const handleLogout = () => {
    auth.signOut();
    resetChat();
  };
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "avatar.png"} alt="" />
        <h3>{currentUser.username}</h3>
      </div>
      <div className="icons">
        <img src="./edit.png" alt="" />
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
