import React from "react";

const ArticlesList = ({ articles }) => {
	const renderedArticles = () =>
		articles.map((article) => {
			return (
				<div key={article.article_id}>
					<img src={article.img_url} alt="article banner" />
				</div>
			);
		});

	return <div>{renderedArticles()}</div>;
};

export default ArticlesList;
