import { useContext } from "react";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { deleteComment, updateComment } from "../helpers/commentsCRUD";

const Comment = ({ comment, commentContent }) => {
	const [userDetails] = useContext(userDetailsContext);

	const handleEditComment = async (commentID) => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const updatedCommentObj = {
			content: commentContent,
			authorID: userDetails,
			articleID: commentID,
		};

		await updateComment(updatedCommentObj, token);
	};

	const handleDeleteComment = async (commentID) => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		await deleteComment(commentID, token);
	};

	const date = new Date(comment.createdAt);
	return (
		<div className="pb-7">
			<div className="flex justify-start items-center gap-3">
				<p className="text-lg font-text">{comment.commentAuthor}</p>
				<p className="text-xs text-gray-300 font-text">{date.toString().substring(3, 11)}</p>
			</div>
			<p className="text-sm pb-3">{comment.commentContent}</p>
			<div className="flex gap-4 text-xs">
				<button onClick={() => handleEditComment(comment.commentID)}>Edit</button>
				<button onClick={() => handleDeleteComment(comment.commentID)}>Delete</button>
			</div>
		</div>
	);
};

export default Comment;
