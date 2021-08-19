import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ArticlesContext } from "../context/ArticleContext";
import { getArticle } from "../helpers/articlesCRUD";

const ArticlePage = () => {
	// eslint-disable-next-line
	const [articleData, setArticleData] = useState(null);
	// eslint-disable-next-line
	const [selectedArticle, setSelectedArticle] = useContext(ArticlesContext);
	const { id } = useParams();

	useEffect(() => {
		console.log(id, "Peter here");
	}, [id]);

	useEffect(() => {
		if (selectedArticle) {
			async function fetchData() {
				const data = await getArticle(selectedArticle);
				setArticleData(data);
			}
			fetchData();
		}
		return () => {};
	}, [selectedArticle]);

	return <div className="mt-32">{articleData?.title}</div>;
};

export default ArticlePage;
