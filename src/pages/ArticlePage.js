import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Image from "../atoms/Image";
import { getArticle } from "../helpers/articlesCRUD";

const ArticlePage = () => {
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

	const renderedArticle = articleData.map((article, idx) => (
		<div key={idx} className="bg-darkBackground text-gray-200 w-full h-screen pt-36 px-3">
			<h1 className="text-4xl font-headers break-words pb-5">{article.title}</h1>
			<p className="text-sm font-headers pb-2">By {article.comments[0].username}</p>
			<p className="text-sm font-headers pb-14">{article.comments[0].createdAt}</p>
			<Image src={article.img_url} />
			<p className="pt-10">{article.content}</p>
		</div>
	));

	return <div>{renderedArticle}</div>;
};

export default ArticlePage;
