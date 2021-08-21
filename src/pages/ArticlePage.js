import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Image from "../atoms/Image";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { getArticle } from "../helpers/articlesCRUD";
import { createComment } from "../helpers/commentsCRUD";

const ArticlePage = () => {
	const [currArticleData, setCurrArticleData] = useState([]);
	const [commentContent, setCommentContent] = useState("");
	const { id } = useParams();
	const [userDetails] = useContext(userDetailsContext);

	useEffect(() => {
		async function fetchData() {
			const data = await getArticle(id);
			console.log(data);
			if (!data || !data[0]) {
				window.location.href = "http://localhost:3000/";
			} else {
				setCurrArticleData(data[0]);
			}
		}
		fetchData();
		return () => {};
	}, [id]);

	const handleCommentCreate = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const commentObj = {
			content: commentContent,
			authorID: userDetails,
			articleID: id,
		};
		await createComment(commentObj, token);
	};

	const commentsList = currArticleData.comments?.map((comment) => {
		const date = new Date(comment.createdAt);
		return (
			<div key={comment.commentId} className="bottom-0">
				<p>{comment.commentContent}</p>
				<p>{comment.commentAuthor}</p>
				<p>{date.toString().substring(3, 16)}</p>
			</div>
		);
	});

	return (
		<div className="bg-darkBackground text-gray-200 w-full h-screen pt-36 px-3">
			<h1 className="text-4xl font-headers break-words pb-5">{currArticleData.title}</h1>
			<p>{currArticleData.articleAuthor}</p>
			<p>{new Date(currArticleData.createdAt).toString().substring(3, 16)}</p>
			<Image src={currArticleData.imageUrl} />
			<p className="pt-10">{currArticleData.content}</p>
			<div>{commentsList}</div>
			<textarea
				value={commentContent}
				onChange={(e) => setCommentContent(e.target.value)}
				className="text-gray-900"
			/>
			<button className="bg-indigo-600" onClick={handleCommentCreate}>
				Comment
			</button>
		</div>
	);
};

export default ArticlePage;
