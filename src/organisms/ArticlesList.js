import React, { useState, useEffect } from "react";
import Article from "../molecules/Article";
import { getAllArticles } from "../helpers/articlesCRUD";

const ArticlesList = () => {
	const [articlesResults, setArticlesResults] = useState([]);
	console.log(articlesResults);

	useEffect(() => {
		getAllArticles(setArticlesResults);
	}, []);

	const renderedArticles = articlesResults.map((article) => (
		<Article key={article.article_id} article={article} />
	));

	return (
		<section className="flex flex-col justify-center items-center w-full h-full px-3">
			<span id="articles" className="block relative -top-16" />
			<h1 className="text-center font-logo font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7 w-full">
				Articles
			</h1>
			{renderedArticles}
			<button className="font-logo font-semibold border-b-2 border-indigo-200 px-3 pt-1 mt-7 mb-12">
				LOAD MORE
			</button>
		</section>
	);
};

export default ArticlesList;
