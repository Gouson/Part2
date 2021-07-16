
import Link from "next/link";

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
