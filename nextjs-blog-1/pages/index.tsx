
import { GetServerSideProps, NextPage } from "next";
import { UAParser } from "ua-parser-js";

type Props = {
  browser: {
    name: string,
    version: string,
    major: string
  }
}
const index: NextPage<Props> = (props) => {
  const { browser } = props
  return (
    <div>
      <h1>你的浏览器是{browser.name}</h1>
    </div>
  );
}
export default index
export const getServerSideProps: GetServerSideProps = async (constext) => {
  const ua = constext.req.headers['user-agent']
  const { browser } = new UAParser(ua).getResult()
  return {
    props: {
      browser
    }
  }
}