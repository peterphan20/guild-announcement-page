export const getAllArticles = async (callback) => {
	const res = await fetch("http://localhost:5000/articles");
	const data = await res.json();
	callback(data.rows);
};

export const getArticle = async (articleID) => {
	const res = await fetch(`http://localhost:5000/articles/${articleID}`);
	const data = await res.json();
	return data.rows;
};

export const createArticle = async (articlesObj, token) => {
	const res = await fetch("http://localhost:5000/articles", {
		method: "POST",
		body: JSON.stringify(articlesObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = res.json();
	return data.rows;
};

export const updateArticle = async (articleID, articlesObj, token) => {
	const res = await fetch(`http://localhost:5000/articles/${articleID}`, {
		method: "PUT",
		body: JSON.stringify(articlesObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = res.json();
	return data.rows;
};

export const deleteArticle = async (articleID, token) => {
	const res = await fetch(`http://localhost:5000/articles/${articleID}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = res.json();
	return data.rows;
};
