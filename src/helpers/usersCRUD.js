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

export const deleteUser = async (userID, token) => {
	const res = await fetch(`http://localhost:5000/users/${userID}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			auth: token,
		},
	});
	const data = res.json();
	return data.rows;
};
