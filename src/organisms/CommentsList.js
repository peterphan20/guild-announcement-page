import { useState, useContext } from "react";
import { useParams } from "react-router";
import Comment from "../molecules/Comment";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { createComment } from "../helpers/commentsCRUD";

const CommentsList = ({ currArticleData }) => {
	const [commentContent, setCommentContent] = useState("");
	const [userDetails] = useContext(userDetailsContext);
	const { id } = useParams();

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

	const commentsList = currArticleData.comments?.map((comment, idx) => {
		return comment.content ? (
			<Comment key={comment.commentID} comment={comment} commentContent={commentContent} />
		) : (
			<p key={idx} className="text-sm font-text pb-7">
				Leave a comment to start a discussion
			</p>
		);
	});

	return (
		<section className="flex flex-col w-full h-full">
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
			<div>{commentsList}</div>
		</section>
	);
};

export default CommentsList;
