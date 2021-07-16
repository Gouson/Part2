import React from "react";
import Link from "next/link";
import styles from "styles/first-post.module.css";
import img from "assets/test.png";
console.log(img);
export default function X() {
  return (
    <>
      <div className={styles.wrapper}>
        First Post <hr />
        <img src={img} />
        回到首页
        <Link href="/">
          <a className={styles.link}> 点击 </a>
        </Link>
      </div>
    </>
  );
}
