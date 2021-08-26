import React, { useState, useEffect } from "react";
import Article from "../molecules/Article";
import { getAllArticles } from "../helpers/articlesCRUD";

const ArticlesList = () => {
	const [articlesResults, setArticlesResults] = useState([]);

	useEffect(() => {
		getAllArticles(setArticlesResults);
	}, []);

	const renderedArticles = articlesResults.map((article) => (
		<Article key={article.article_id} article={article} />
	));

	return (
		<div className="flex flex-col justify-center items-center w-full h-full px-3 lg:px-56">
			<span id="articles" className="block relative -top-16 lg:-top-24" />
			<h1 className="text-center font-logo font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7 w-full lg:text-3xl lg:mb-10">
				Articles
			</h1>
			<div className="grid grid-cols-3 gap-2 w-full lg:gap-4">{renderedArticles}</div>
			<button className="font-logo font-semibold border-b-2 border-indigo-200 px-3 pt-1 mt-7 mb-12">
				LOAD MORE
			</button>
		</div>
	);
};

export default ArticlesList;
