import React, { useState, useEffect } from "react";
import { getAllArticles } from "../helpers/articlesCRUD";
import Hero from "../organisms/Hero";
import Gallery from "../organisms/Gallery";
import ArticlesList from "../organisms/ArticlesList";
import Footer from "../organisms/Footer";

const HomePage = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getAllArticles(setArticles);
	}, []);

	return (
		<div className="bg-darkAccent text-gray-200 z-10">
			<Hero />
			<Gallery articles={articles} />
			<ArticlesList articles={articles} />
			<Footer />
		</div>
	);
};

export default HomePage;
