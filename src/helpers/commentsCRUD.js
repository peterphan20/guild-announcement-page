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

export const updateComment = async (commentID, editCommentObj, token) => {
	const res = await fetch(`http://localhost:5000/comments/${commentID}`, {
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

export const deleteComment = async (commentID, token) => {
	const res = await fetch(`http://localhost:5000/comments/${commentID}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = await res.json();
	return data.rows;
};
