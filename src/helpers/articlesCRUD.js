import { config } from "../config";

const { API_URL } = config;

export const getAllArticles = async (callback) => {
	const res = await fetch(`${API_URL}/articles`);
	const data = await res.json();
	callback(data.rows);
};

export const getArticle = async (articleID) => {
	const res = await fetch(`${API_URL}/articles/${articleID}`);
	const data = await res.json();
	return data.rows;
};

export const createArticle = async (articlesObj, token) => {
	const res = await fetch(`${API_URL}/articles`, {
		method: "POST",
		body: JSON.stringify(articlesObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = await res.json();
	return data;
};

export const updateArticle = async (articleID, articlesObj, token) => {
	const res = await fetch(`${API_URL}/articles/${articleID}`, {
		method: "PUT",
		body: JSON.stringify(articlesObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = await res.json();
	return data;
};

export const deleteArticle = async (articleID, token) => {
	const res = await fetch(`${API_URL}/articles/${articleID}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = await res.json();
	return data;
};
