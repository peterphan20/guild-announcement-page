import React from "react";
import Article from "../molecules/Article";
import { useArticlesData } from "../context/ArticleContext";


const ArticlesList = () => {
	const articlesData = useArticlesData();

	const renderedArticles = articlesData.map((article) => (
		<Article
			key={article.article_id}
			article={article}
		/>
	));

	return (
		<section className="flex flex-col justify-center items-center w-full h-full px-3">
			<span id="articles" className="block relative -top-16" />
			<h1 className="text-center font-logo font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7 mb-7 w-full">
				Articles
			</h1>
			{renderedArticles}
			<button className="font-logo font-semibold border-b-2 border-indigo-200 px-3 py-1 mt-7">
				LOAD MORE
			</button>
		</section>
	);
};

export default ArticlesList;
