import React from "react";
import Header from "../components/Header.tsx";
import styles from "../styles/News.module.css";

const data = [
  {
    id: "1",
    content: "アプリをデモリリースしました。",
    createdDate: 1723103758609,
  },
  {
    id: "2",
    content: "本を５件追加しました。",
    createdDate: 1723103758609,
  },
  {
    id: "3",
    content: "本を追加する機能をリリースしました",
    createdDate: 1723103758609,
  },
];

export const News = () => {
  const emptyNotice = (msg: string) => {
    return (
      <li>
        <div>{msg}</div>
      </li>
    );
  };

  const modifyDate = (created_date: number | Date) => {
    const created = new Date(created_date);
    const date = `${created.getFullYear()}/${(
      "0" +
      (created.getMonth() + 1)
    ).slice(-2)}/${("0" + created.getDate()).slice(-2)} ${(
      "0" + created.getHours()
    ).slice(-2)}:${("0" + created.getMinutes()).slice(-2)}`;
    return date;
  };

  return (
    <div style={{ height: "100dvh" }}>
      <Header />
      <h3 className={styles.title}>お知らせ</h3>
      <div className={styles.notificationList}>
        <ul className={styles.data}>
          {!data?.length
            ? emptyNotice("お知らせはありません。")
            : data.map(notification => {
                return (
                  <li className={styles.list} key={notification.id}>
                    <span className={styles.time}>
                      {modifyDate(notification.createdDate)}
                    </span>
                    <div className={styles.content}>
                      <p>{notification.content}</p>
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};
