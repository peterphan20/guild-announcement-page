import { useState, useContext } from "react";
import { useParams } from "react-router";
import Comment from "../molecules/Comment";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { createComment } from "../helpers/commentsCRUD";

const CommentsList = ({ currArticleData }) => {
	const [content, setContent] = useState("");
	const [userDetails] = useContext(userDetailsContext);
	const { id } = useParams();

	const onHandleCommentCreate = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const commentObj = {
			content: content,
			authorID: userDetails,
			articleID: id,
		};
		await createComment(commentObj, token);
	};

	const commentsList = currArticleData.comments?.map((comment, idx) => {
		return comment.commentContent ? (
			<Comment key={comment.commentID} comment={comment} />
		) : (
			<p key={idx} className="text-sm font-text pb-7">
				Leave a comment to start a discussion!
			</p>
		);
	});

	return (
		<section className="flex flex-col mb-10 w-full h-full">
			<p className="font-logo font-semibold text-gray-200 border-b border-gray-500 px-3 py-1 mt-7 mb-7 w-full">
				Start a Discussion
			</p>
			<textarea
				placeholder="Add a comment"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className="bg-gray-200 text-sm text-gray-900 flex-grow-0 flex-shrink-0 border-solid border border-gray-300 p-2 w-full h-24 outline-none resize-none focus:ring-2 focus:ring-blue-500"
			/>
			<button className="bg-indigo-600 mb-8 py-2 w-full" onClick={onHandleCommentCreate}>
				Comment
			</button>
			<div>{commentsList}</div>
		</section>
	);
};

export default CommentsList;
