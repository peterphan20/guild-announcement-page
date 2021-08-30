import { useState, useEffect, useContext } from "react";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { deleteComment, updateComment } from "../helpers/commentsCRUD";

const Comment = ({ comment, currArticleData, setCurrArticleData }) => {
	const [editCommentContent, setEditCommentContent] = useState("");
	const [editToggle, setEditToggle] = useState(false);
	const [userDetails] = useContext(userDetailsContext);

	useEffect(() => {
		setEditCommentContent(comment.commentContent);
	}, [comment]);

	const onHandleToggleEdit = () => {
		setEditToggle((editToggle) => !editToggle);
		setEditCommentContent(editCommentContent);
	};

	const onHandleEditComment = async (commentID) => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const updatedCommentObj = {
			content: editCommentContent,
		};

		const response = await updateComment(commentID, updatedCommentObj, token);
		if (response.code === 200) {
			setEditToggle((editToggle) => !editToggle);
		}
	};

	const onHandleDeleteComment = async (commentID) => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const copyArticleArray = JSON.parse(JSON.stringify(currArticleData));

		copyArticleArray.comments = copyArticleArray.comments.filter((comment) => {
			return comment.commentID !== commentID;
		});

		await deleteComment(commentID, token);
		setCurrArticleData(copyArticleArray);
	};

	const renderedButtons =
		userDetails === comment.commentAuthorID ? (
			<div className="flex gap-4 text-xs">
				<button onClick={() => onHandleToggleEdit(comment.commentID)}>Edit</button>
				<button onClick={() => onHandleDeleteComment(comment.commentID)}>Delete</button>
			</div>
		) : (
			""
		);

	const date = new Date(comment.createdAt);
	return (
		<div className="pb-7 lg:pb-10 w-full h-full">
			<div className="flex justify-start items-center gap-3">
				<p className="text-lg font-text lg:text-xl">{comment.commentAuthor}</p>
				<p className="text-xs text-gray-300 font-text lg:text-base">
					{date.toString().substring(3, 11)}
				</p>
			</div>
			{!editToggle ? (
				<div>
					<p className="text-sm pb-3 lg:text-base">{comment.commentContent}</p>
					{renderedButtons}
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
							onClick={() => onHandleEditComment(comment.commentID)}
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
