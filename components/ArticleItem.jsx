import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

export const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <div className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  );
};