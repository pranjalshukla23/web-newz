import Link from "next/Link";
import { server } from "../../../config";
import { Meta } from "../../../components/Meta";

export default function Article({ article }) {
  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

//runs at run-time after each request
//suitable for rendering dynamic data
//export const getServerSideProps = async (context) => {
//  const res = await fetch(
//    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//  );
//
//  const article = await res.json();
//
//  return {
//    props: {
//      article,
//    },
//  };
//};

//runs only once at run time
//suitable for rendering static data
export const getStaticProps = async (context) => {
  //const res = await fetch(
  //  `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  //);
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

//generates dynamic paths
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
};