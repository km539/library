import React from "react";
import "../styles/Index.css";
import Header from "../components/Header.tsx";
import { FaSearch, FaRegUser, FaRegStar, FaPlus } from "react-icons/fa";
import { MdOutlineFiberNew } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";

function Index() {
  return (
    <>
      <Header />
      <div className="box">
        <h1>目次</h1>
        <ul>
          <li className="menuList">
            <a href="/search">
              <FaSearch />
              <p>資料検索</p>
            </a>
          </li>
          <li className="menuList">
            <a href="/books">
              <MdOutlineFiberNew />
              <p>新着案内</p>
            </a>
          </li>
          <li className="menuList">
            <a href="/books">
              <FaRegStar />
              <p>貸出ベスト</p>
            </a>
          </li>
          <li className="menuList">
            <a href="/books">
              <FaRegUser />
              <p>ユーザー</p>
            </a>
          </li>
          <li className="menuList">
            <a href="/add">
              <FaPlus />
              <p>本の追加</p>
            </a>
          </li>
          <li className="menuList">
            <a href="/news">
              <HiOutlineBellAlert />
              <p>通知内容</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Index;
