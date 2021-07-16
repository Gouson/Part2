import React from "react";
import Link from "next/link";
import styles from "styles/first-post.module.css";
import x from "assets/bb.png";
console.log("执行");
console.log(x);
export default function X() {
  return (
    <>
      <div className={styles.wrapper}>
        First Post <hr />
        <img src={x} />
        回到首页
        <Link href="/">
          <a className={styles.link}> 点击 </a>
        </Link>
      </div>
    </>
  );
}
