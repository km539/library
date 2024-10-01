import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";
import Header from "./Header.tsx";

const Login = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const changeFlag = () => setFlag(!flag);

  const submitAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const target = e.target as typeof e.target & {
        username: { value: string };
        password: { value: string };
      };
      const formBody = {
        username: target.username.value,
        password: target.password.value,
      };
      if (!flag) {
        const response = await fetch(
          "http://localhost:5000/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formBody),
          }
        );

        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        window.alert("User created successfully");
        return navigate(`/`);
      }

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formBody),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      window.alert("Login successful");
      navigate(`/`);
    } catch (error) {
      console.error("submitAction Error : ", error.message);
      window.alert(`Error : ${error.message}`);
    }
  };
  return (
    <div style={{ height: "100dvh" }}>
      <Header />
      {flag ? (
        <div style={{ marginTop: "1rem" }}>
          <h2 className="title">Login Form</h2>
          <form action="" onSubmit={submitAction}>
            <div style={{ padding: "10px 16px" }}>
              <label htmlFor="username">username</label>
              <input type="text" name="username" required />
              <label htmlFor="password">password</label>
              <input type="password" name="password" required />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button>Login</button>
                <button type="button" onClick={changeFlag}>
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <h2 className="title">Register Form</h2>
          <form action="" onSubmit={submitAction}>
            <div style={{ padding: "10px 16px" }}>
              <label htmlFor="username">username</label>
              <input type="text" name="username" required />
              <label htmlFor="password">password</label>
              <input type="password" name="password" required />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button type="button" onClick={changeFlag}>
                  Login
                </button>
                <button>Register</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
