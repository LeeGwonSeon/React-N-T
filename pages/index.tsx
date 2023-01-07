import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import homeStyles from "../styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "../lib/post";

const inter = Inter({ subsets: ["latin"] });

const Home = ({
  allPropsData,
}: {
  allPropsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <>
      <Head>
        <title>Logan Lee</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Logan Lee Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPropsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPropsData = getSortedPostsData();
  return {
    props: {
      allPropsData,
    },
  };
};
