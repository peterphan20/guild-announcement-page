export const createComment = async (commentObj, token) => {
	const res = await fetch("http://localhost:5000/comments", {
		method: "POST",
		body: JSON.stringify(commentObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = res.json();
	return data;
};

export const updateComment = async (commentId, editCommentObj, token) => {
	const res = await fetch(`http://localhost:5000/comments/${commentId}`, {
		method: "PUT",
		body: JSON.stringify(editCommentObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = await res.json();
	return data;
};

export const deleteComment = async (commentId, token) => {
	const res = await fetch(`http://localhost:5000/comments/${commentId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = await res.json();
	return data.rows;
};
