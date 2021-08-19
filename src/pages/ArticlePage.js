import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticle } from "../helpers/articlesCRUD";

const ArticlePage = () => {
	// eslint-disable-next-line
	const [articleData, setArticleData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		console.log(id);
	}, [id]);

	useEffect(() => {
		if (id) {
			async function fetchData() {
				const data = await getArticle(id);
				setArticleData(data);
			}
			fetchData();
		}
		return () => {};
	}, [id]);

	return <div></div>;
};

export default ArticlePage;
