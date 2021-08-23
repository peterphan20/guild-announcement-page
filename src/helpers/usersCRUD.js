export const getAllUsers = async (callback) => {
	const res = await fetch("http://localhost:5000/users");
	const data = await res.json();
	callback(data.rows);
};

export const userSignIn = async (userObj) => {
	const res = await fetch("http://localhost:5000/auth/login", {
		method: "POST",
		body: JSON.stringify(userObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = await res.json();
	return data;
};

export const createUser = async (userObj) => {
	const res = await fetch("http://localhost:5000/auth/create", {
		method: "POST",
		body: JSON.stringify(userObj),
		headers: { "Content-Type": "application/json; charset=UTF-8" },
	});
	const data = res.json();
	return data;
};

export const updateUser = async (userId, userObj, token) => {
	const res = await fetch(`http://localhost:5000/users/${userId}`, {
		method: "PUT",
		body: JSON.stringify(userObj),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await res.json();
	return data;
};

export const deleteUser = async (userId, token) => {
	const res = await fetch(`http://localhost:5000/articles/${userId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`,
		},
	});
	const data = res.json();
	return data.rows[0];
};
