import React from "react";
import Hero from "../organisms/Hero";
import Gallery from "../organisms/Gallery";
import ArticlesList from "../organisms/ArticlesList";
import Footer from "../organisms/Footer";

const HomePage = () => {
	return (
		<div className="bg-darkAccent text-gray-200 z-10">
			<Hero />
			<Gallery />
			<ArticlesList />
			<Footer />
		</div>
	);
};

export default HomePage;
