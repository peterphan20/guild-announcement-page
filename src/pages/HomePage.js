import React from "react";
import Hero from "../organisms/Hero";
import Gallery from "../organisms/Gallery";
import ArticlesList from "../organisms/ArticlesList";

const HomePage = () => {
	return (
		<div className="bg-dark_background text-gray-200 z-10 w-full h-full min-h-full">
			<Hero />
			<Gallery />
			<ArticlesList />
		</div>
	);
};

export default HomePage;
