import React from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <h2>Login Form</h2>
      </div>
      <div>
        <form action="" onSubmit={submitAction}>
          <div>
            <label htmlFor="username">username</label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" required />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
