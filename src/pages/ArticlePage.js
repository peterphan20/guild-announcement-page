import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentsList from "../organisms/CommentsList";
import Image from "../atoms/Image";
import { getArticle } from "../helpers/articlesCRUD";

const ArticlePage = () => {
	const [currArticleData, setCurrArticleData] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const data = await getArticle(id);
			if (!data || !data[0]) {
				window.location.href = "http://localhost:3000/";
			} else {
				setCurrArticleData(data[0]);
			}
		}
		fetchData();
		return () => {};
	}, [id]);

	return (
		<div className="bg-darkBackground text-gray-200 w-full h-full pt-32 px-3">
			<h1 className="text-4xl font-headers break-words pb-4">{currArticleData.title}</h1>
			<p className="font-logo text-xs pb-3">By {currArticleData.articleAuthor}</p>
			<p className="font-logo text-xs pb-10">
				{new Date(currArticleData.createdAt).toString().substring(3, 16)}
			</p>
			<Image src={currArticleData.imageUrl} />
			<p className="pt-10 pb-24">{currArticleData.content}</p>
			<CommentsList currArticleData={currArticleData} />
		</div>
	);
};

export default ArticlePage;
