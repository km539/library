import React from "react";
import "../styles/Index.css";
import Header from "../components/Header.tsx";

function Index() {
  return (
    <>
      <Header />
      <h1>目次</h1>
      <ul>
        <li>
          <a href="/search">資料検索</a>
          資料を探す
        </li>
        <li>
          <a href="/books">新着案内</a>
          新しく入った資料を見る
        </li>
        <li>
          <a href="/books">貸出ベスト</a>
          貸し出しの多い資料を見る
        </li>
      </ul>
    </>
  );
}

export default Index;
