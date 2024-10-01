import React, { useState } from "react";
import Header from "../components/Header.tsx";
import { BookType } from "../types/types";

export const NewBook = () => {
  const [bookInfo, setBookInfo] = useState<BookType>({
    title: "",
    author: "",
    published: null,
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookInfo),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      window.alert("本が追加されました。");
      resetForm();
    } catch (error: any) {
      console.error("Error:", error);
      window.alert(`エラー : ${error.message}`);
    }
  };

  const years = Array.from({ length: 401 }, (_, i) => 1700 + i);

  const resetForm = () => {
    setBookInfo({ title: "", author: "", published: null });
  };

  return (
    <div style={{ height: "100dvh" }}>
      <Header />
      <div style={{ marginTop: "1rem" }}>
        <h2 className="title">追加フォーム</h2>
        <form action="" onSubmit={submit}>
          <div style={{ padding: "10px 16px" }}>
            <label htmlFor="title">タイトル</label>
            <input
              required
              type="text"
              name="title"
              value={bookInfo.title}
              onChange={e => {
                setBookInfo({ ...bookInfo, title: e.target.value });
              }}
            />
            <label htmlFor="author">著者</label>
            <input
              required
              type="text"
              name="author"
              value={bookInfo.author}
              onChange={e => {
                setBookInfo({ ...bookInfo, author: e.target.value });
              }}
            />
            <label htmlFor="publishedDate">発行日</label>
            {/* <input type="number" name="publishedDate" min={1700} max={2024} /> */}
            <select
              value={bookInfo.published || ""}
              onChange={e =>
                setBookInfo({ ...bookInfo, published: Number(e.target.value) })
              }
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button style={{ width: "auto" }}>追加</button>
              <button
                type="button"
                style={{ width: "auto" }}
                onClick={resetForm}
              >
                クリア
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
