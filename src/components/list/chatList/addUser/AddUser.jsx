import "./addUser.css"

const AddUser = () => {
  return (
    <div className="addUser">
        <form>
            <input type="text" placeholder="UserName" name="username" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>joan nelson</span>
            </div>
        </div>
    </div>
  )
}

export default AddUser