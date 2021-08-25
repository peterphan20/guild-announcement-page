import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentsList from "../organisms/CommentsList";
import Image from "../atoms/Image";
import { deleteArticle, getArticle } from "../helpers/articlesCRUD";

const ArticlePage = () => {
	const [currArticleData, setCurrArticleData] = useState([]);
	const { articleID } = useParams();

	useEffect(() => {
		async function fetchData() {
			const data = await getArticle(articleID);
			if (!data || !data[0]) {
				window.location.href = "http://localhost:3000/";
			} else {
				setCurrArticleData(data[0]);
			}
		}
		fetchData();
		return () => {};
	}, [articleID]);

	const onHandleDeleteArticle = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		await deleteArticle(articleID, token);
	};

	return (
		<div className="bg-darkBackground text-gray-200 w-full h-full pt-28 px-3">
			<p className="font-logo text-xs pb-1">
				{new Date(currArticleData.createdAt).toString().substring(3, 16)}
			</p>
			<h1 className="text-4xl font-headers break-words pb-2">{currArticleData.title}</h1>
			<p className="font-logo text-sm pb-12">By {currArticleData.articleAuthor}</p>
			<Image src={currArticleData.imageUrl} />
			<p className="pt-10 pb-24">{currArticleData.content}</p>
			<CommentsList currArticleData={currArticleData} />
			<div className="flex justify-end self-center pb-4">
				<button
					className="font-text text-red-600 text-xs border border-gray-500 rounded-lg py-1 px-2"
					onClick={() => onHandleDeleteArticle(currArticleData.articleID)}
				>
					Delete article
				</button>
			</div>
		</div>
	);
};

export default ArticlePage;
