import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.file[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.creatObjectURL(e.target.file[0]),
      });
    }
  };


  const handleLogin = e=>{
    e.preventDefault()
    toast.warn("test")
  }

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create An Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            <span> Upload an image</span>
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="UserName" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;