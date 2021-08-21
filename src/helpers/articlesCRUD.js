export const getAllArticles = async (callback) => {
	const res = await fetch("http://localhost:5000/articles");
	const data = await res.json();
	callback(data.rows);
};

export const getArticle = async (articleId) => {
	const res = await fetch(`http://localhost:5000/articles/${articleId}`);
	const data = await res.json();
	return data.rows;
};

export const createArticle = async (articlesObj) => {
	const res = await fetch("http://localhost:5000/articles", {
		method: "POST",
		body: JSON.stringify(articlesObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = res.json();
	return data.rows;
};

export const updateArticle = async (articleId, articlesObj) => {
	const res = await fetch(`http://localhost:5000/articles/${articleId}`, {
		method: "PUT",
		body: JSON.stringify(articlesObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = res.json();
	return data.rows;
};

export const deleteArticle = async (articleId) => {
	const res = await fetch(`http://localhost:5000/articles/${articleId}`, {
		method: "DELETE",
	});
	const data = res.json();
	return data.rows[0];
};
