import React, { useState, useEffect } from "react";
import { getAllArticles } from "../helpers/articlesCRUD";
import Hero from "../organisms/Hero";
import Gallery from "../organisms/Gallery";
import ArticlesList from "../organisms/ArticlesList";

const HomePage = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getAllArticles(setArticles);
	}, []);

	return (
		<div className="bg-gray-100 text-gray-900 z-10">
			<Hero />
			<Gallery articles={articles} />
			<ArticlesList articles={articles} />
		</div>
	);
};

export default HomePage;
