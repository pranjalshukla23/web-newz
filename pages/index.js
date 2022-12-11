import Head from "next/head";
import { ArticleList } from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  console.log(articles);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

//runs only once at run-time
//suitable for rending data which is static
export const getStaticProps = async () => {
  //const res = await fetch(
  //  "https://jsonplaceholder.typicode.com/posts?_limit=6"
  //);

  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};