import headerStyles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <>
      <h1 className={headerStyles.title}>
        <span>Web dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with latest web dev news
      </p>
    </>
  );
};