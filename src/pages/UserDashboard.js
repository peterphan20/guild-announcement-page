import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { userDetailsContext } from "../context/UserDetailsProvider";
import { deleteUser } from "../helpers/usersCRUD";

const UserDashboard = () => {
	const [userDetails] = useContext(userDetailsContext);

	const onHandleDeleteUser = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		await deleteUser(userDetails, token);
	};

	return (
		<div className="bg-darkBackground text-gray-100 pt-24 px-5 w-full h-screen">
			<h1 className="font-text text-gray-200 text-2xl border-b border-gray-500 border-solid pb-1 mb-3">
				Want to add an entry?
			</h1>
			<Link to="/create-article-page" aria-label="Click here to add an entry">
				<button className="bg-green-600 font-text text-gray-200 text-sm rounded-lg py-1 px-2 mb-10">
					Create an article
				</button>
			</Link>
			<h1 className="font-text font-bold text-red-600 text-2xl border-b border-gray-500 border-solid pb-1 mb-3">
				Delete account
			</h1>
			<p className="font-text text-sm mb-3">
				This action is permanent, once deleted there is going back.
			</p>
			<button
				className="font-text text-red-600 text-sm border border-gray-500 rounded-lg py-1 px-2"
				onClick={onHandleDeleteUser}
			>
				Delete your account
			</button>
		</div>
	);
};

export default UserDashboard;
