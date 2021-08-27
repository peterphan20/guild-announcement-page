import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import CommentsList from "../organisms/CommentsList";
import Image from "../atoms/Image";
import { deleteArticle, getArticle } from "../helpers/articlesCRUD";

const ArticlePage = () => {
	const [currArticleData, setCurrArticleData] = useState([]);
	const { articleID } = useParams();
	const history = useHistory();

	useEffect(() => {
		async function fetchData() {
			const data = await getArticle(articleID);
			if (!data || !data[0]) {
				history.push("/");
			} else {
				window.scrollTo(0, 0);
				setCurrArticleData(data[0]);
			}
		}
		fetchData();
		return () => {};
	}, [articleID]);

	const onHandleDeleteArticle = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const response = await deleteArticle(articleID, token);

		if (response.code === 200) {
			history.push("/");
		}
	};

	return (
		<div className="bg-darkBackground text-gray-200 w-full h-full pt-28 px-3 lg:pt-40 lg:px-80">
			<p className="font-logo text-xs pb-1 lg:text-lg">
				{new Date(currArticleData.createdAt).toString().substring(3, 16)}
			</p>
			<h1 className="text-4xl font-headers break-words pb-2 lg:text-5xl">
				{currArticleData.title}
			</h1>
			<p className="font-logo text-sm mb-12 lg:text-lg lg:-mb-32">
				By {currArticleData.articleAuthor}
			</p>
			<Image src={currArticleData.imageUrl} className="py-0 px-0 lg:py-40 lg:px-80" />
			<p className="font-text text-lg mt-10 pb-24 lg:text-xl lg:-mt-24">
				{currArticleData.content}
			</p>
			<CommentsList currArticleData={currArticleData} setCurrArticleData={setCurrArticleData} />
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
