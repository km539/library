import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const submitAction = e => {
    e.preventDefault();
    try {
      const name = e.target.username.value;
      const password = e.target.password.value;
      //   console.log(name, password);
      navigate(`/books`);
    } catch (error) {
      console.error("submitAction Error : ", error.message);
    }
  };
  return (
    <>
      <h2 className="title">Login Form</h2>
      <div>
        <form action="" onSubmit={submitAction}>
          <div className="container">
            <label htmlFor="username">username</label>
            <input type="text" name="username" required />
            <label htmlFor="password">password</label>
            <input type="password" name="password" required />
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
