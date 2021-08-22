import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Image from "../atoms/Image";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { getArticle } from "../helpers/articlesCRUD";
import { createComment, updateComment, deleteComment } from "../helpers/commentsCRUD";

const ArticlePage = () => {
	const [currArticleData, setCurrArticleData] = useState([]);
	const [commentContent, setCommentContent] = useState("");
	const { id } = useParams();
	const [userDetails] = useContext(userDetailsContext);

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

	const handleCommentCreate = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const commentObj = {
			content: commentContent,
			authorID: userDetails,
			articleID: id,
		};
		await createComment(commentObj, token);
		console.log("successfully created comment");
	};

	const handleEditComment = async (commentId) => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const updatedCommentObj = {
			content: commentContent,
			authorID: userDetails,
			articleID: commentId,
		};

		await updateComment(updatedCommentObj, token);
	};

	const handleDeleteComment = async (commentId) => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		await deleteComment(commentId, token);
	};

	const commentsList = currArticleData.comments?.map((comment) => {
		const date = new Date(comment.createdAt);
		return (
			<div key={comment.commentId} className="pb-7">
				<div className="flex justify-start items-center gap-3">
					<p className="text-lg font-text">{comment.commentAuthor}</p>
					<p className="text-xs text-gray-300 font-text">{date.toString().substring(3, 11)}</p>
				</div>
				<p className="text-sm pb-3">{comment.commentContent}</p>
				<div className="flex gap-4 text-xs">
					<button onClick={() => handleEditComment(comment.commentId)}>Edit</button>
					<button onClick={() => handleDeleteComment(comment.commentId)}>Delete</button>
				</div>
			</div>
		);
	});

	return (
		<div className="bg-darkBackground text-gray-200 w-full h-full pt-32 px-3">
			<h1 className="text-4xl font-headers break-words pb-4">{currArticleData.title}</h1>
			<p className="font-logo text-xs pb-3">By {currArticleData.articleAuthor}</p>
			<p className="font-logo text-xs pb-10">
				{new Date(currArticleData.createdAt).toString().substring(3, 16)}
			</p>
			<Image src={currArticleData.imageUrl} />
			<p className="pt-10 pb-24">{currArticleData.content}</p>
			<div className="flex flex-col w-full h-full">
				<p className="font-logo font-semibold border-b-2 border-gray-300 px-3 py-1 mt-7 mb-7 w-full">
					Start a Discussion
				</p>
				<textarea
					placeholder={!userDetails ? "Please sign in to comment" : "Add a comment"}
					value={commentContent}
					onChange={(e) => setCommentContent(e.target.value)}
					className="text-sm text-gray-900 flex-grow-0 flex-shrink-0 border-solid border border-gray-300 p-2 w-full h-30 outline-none resize-none focus:ring-2 focus:ring-blue-500"
					disabled={!userDetails}
				/>
				<button className="bg-indigo-600 mb-8 h-8" onClick={handleCommentCreate}>
					Comment
				</button>
				<div className="pb-20">{commentsList}</div>
			</div>
		</div>
	);
};

export default ArticlePage;
