import React from "react";

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
      <h2 className="title">検索フォーム</h2>
      <div>
        <form action="" onSubmit={submitAction}>
          <div className="container">
            <label htmlFor="title">タイトル</label>
            <input type="text" name="title" />
            <label htmlFor="author">著者</label>
            <input type="text" name="author" />
            <label htmlFor="publishedDate">発行</label>
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
