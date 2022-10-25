import { Link } from "react-router-dom";
import "./register.style.scss";

const Register = () => {
  return (
    <div className="container-register">
      <div className="card">
        <div className="left">
          <h1>Register Socials </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            officiis laudantium nisi maxime qui, id laboriosam veniam sit
            aspernatur quae. Corporis harum porro hic consectetur officiis,
            voluptatem accusantium tenetur quam!
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button className="btn-register">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Resgiter</h1>
          <form className="form-login">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="btn-login">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
