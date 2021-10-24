import { config } from "../config";

const { API_URL } = config;

export const getAllUsers = async (callback) => {
	const res = await fetch(`${API_URL}/users`);
	const data = await res.json();
	callback(data.rows);
};

export const userSignIn = async (userObj) => {
	const res = await fetch(`${API_URL}/auth/login`, {
		method: "POST",
		body: JSON.stringify(userObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const createUser = async (userObj) => {
	const res = await fetch(`${API_URL}/auth/create`, {
		method: "POST",
		body: JSON.stringify(userObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const persistAuthentication = async (token) => {
	const res = await fetch(`${API_URL}/authenticated`, {
		headers: {
			auth: token,
		},
	});
	const data = await res.json();
	return data;
};

export const deleteUser = async (userID, token) => {
	const res = await fetch(`${API_URL}/users/${userID}`, {
		method: "DELETE",
		headers: {
			auth: token,
		},
	});
	const data = await res.json();
	return data;
};
