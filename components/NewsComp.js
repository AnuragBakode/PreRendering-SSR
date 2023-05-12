import React from "react";

export const NewsComp = ({ articles }) => {
  return (
    <>
      <h1>List of News Article</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
};
