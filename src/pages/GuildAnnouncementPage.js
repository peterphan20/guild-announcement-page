import React, { useState, useEffect } from "react";
import { getAllArticles } from "../helpers/articlesCRUD";
import Hero from "../organisms/Hero";
import Gallery from "../organisms/Gallery";
import ArticlesList from "../organisms/ArticlesList";

const GuildAnnouncementPage = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getAllArticles(setArticles);
	}, []);

	return (
		<div>
			<Hero />
			<Gallery articles={articles} />
			<ArticlesList articles={articles} />
		</div>
	);
};

export default GuildAnnouncementPage;
