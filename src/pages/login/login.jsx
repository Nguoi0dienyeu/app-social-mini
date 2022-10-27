import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.style.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left">
          <h1>Login Socials Design Sson</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            officiis laudantium nisi maxime qui, id laboriosam veniam sit
            aspernatur quae. Corporis harum porro hic consectetur officiis,
            voluptatem accusantium tenetur quam!
          </p>
          <span>Do you have an account?</span>
          <Link to="/register">
            <button className="btn-register">Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form className="form-login">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
