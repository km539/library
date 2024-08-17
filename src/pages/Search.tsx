import React from "react";
import Header from "../components/Header.tsx";

function Search() {
  const submitAction = e => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const author = e.target.author.value;
      //   console.log(name, password);
    } catch (error) {
      console.error("submitAction Error : ", error.message);
    }
  };

  return (
    <>
      <Header />
      <div style={{ height: "100dvh", marginTop: "1rem" }}>
        <h2 className="title">検索フォーム</h2>
        <form action="" onSubmit={submitAction}>
          <div style={{ padding: "10px 16px" }}>
            <label htmlFor="title">タイトル</label>
            <input type="text" name="title" />
            <label htmlFor="author">著者</label>
            <input type="text" name="author" />
            <label htmlFor="publishedDate">発行日</label>
            <input type="text" name="publishedDate" />
            <button>検索</button>
            <button>クリア</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
