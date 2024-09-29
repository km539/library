import React, { useState } from "react";
import Header from "../components/Header.tsx";

export const NewBook = () => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    published: null,
  });
  return (
    <div style={{ height: "100dvh" }}>
      <Header />
      <div style={{ marginTop: "1rem" }}>
        <h2 className="title">追加フォーム</h2>
        <form action="" onSubmit={() => {}}>
          <div style={{ padding: "10px 16px" }}>
            <label htmlFor="title">タイトル</label>
            <input type="text" name="title" />
            <label htmlFor="author">著者</label>
            <input type="text" name="author" />
            <label htmlFor="publishedDate">発行日</label>
            <input type="text" name="publishedDate" />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button style={{ width: "auto" }}>追加</button>
              <button style={{ width: "auto" }}>クリア</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
