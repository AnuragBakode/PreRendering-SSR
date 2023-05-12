import React from "react";

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>{category} Result showing</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h1>
              {article.id} {article.title} | {article.description}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Anurag"]);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  if (data.length == 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: data,
      category,
    },
  };
}
