import { useState, useEffect } from "react";
import { deleteComment, updateComment } from "../helpers/commentsCRUD";

const Comment = ({ comment }) => {
	const [currComment, setCurrComment] = useState("");
	const [editCommentContent, setEditCommentContent] = useState("");
	const [editToggle, setEditToggle] = useState(false);

	useEffect(() => {
		setEditCommentContent(comment.commentContent);
		setCurrComment(comment.commentID);
	}, [comment]);

	const onHandleToggleEdit = () => {
		setEditToggle(true);
		setEditCommentContent(editCommentContent);
	};

	const onHandleEditComment = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const updatedCommentObj = {
			content: editCommentContent,
			commentID: currComment,
		};

		await updateComment(updatedCommentObj, token);
		setEditToggle(false);
	};

	const onHandleDeleteComment = async (commentID) => {
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
			{!editToggle ? (
				<div>
					<p className="text-sm pb-3">{comment.commentContent}</p>
					<div className="flex gap-4 text-xs">
						<button onClick={() => onHandleToggleEdit(comment.commentID)}>Edit</button>
						<button onClick={() => onHandleDeleteComment(comment.commentID)}>Delete</button>
					</div>
				</div>
			) : (
				<div className="pt-3 w-full">
					<textarea
						value={editCommentContent}
						onChange={(e) => setEditCommentContent(e.target.value)}
						className="bg-gray-200 font-text text-sm text-gray-900 flex-grow-0 flex-shrink-0 border-solid border border-gray-300 p-2 w-full h-24 outline-none resize-none focus:ring-2 focus:ring-blue-500"
					/>
					<div className="flex justify-end items-center">
						<button
							className="bg-indigo-600 text-gray-200 text-sm py-1 px-2 rounded-lg"
							onClick={onHandleEditComment}
						>
							Submit
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Comment;
