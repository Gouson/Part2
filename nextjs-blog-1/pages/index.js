import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div>
      <Link href="/posts/first-post">
        <a> 第一篇文章! </a>
      </Link>
      <style jsx>
        {`
          a {
            color: green;
          }
        `}
      </style>
    </div>
  );
}
