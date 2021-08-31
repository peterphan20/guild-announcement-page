import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../organisms/Modal";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { deleteUser } from "../helpers/usersCRUD";

const UserDashboard = () => {
	const [deleteUserModalIsShowing, setUserCommentModalIsShowing] = useState(false);
	const [userDetails] = useContext(userDetailsContext);
	const history = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onHandleDeleteUser = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const response = await deleteUser(userDetails, token);
		if (response.code === 200) {
			history.push("/");
			localStorage.removeItem("authToken");
		}
	};

	return (
		<div className="bg-dark_background text-gray-100 pt-24 px-5 w-full h-screen lg:pt-32 lg:px-56">
			{deleteUserModalIsShowing ? (
				<Modal
					modalHandler={setUserCommentModalIsShowing}
					text="user"
					clickHandler={() => onHandleDeleteUser(userDetails)}
				/>
			) : null}
			<h1 className="font-text text-gray-200 text-2xl border-b border-gray-500 border-solid pb-1 mb-3 lg:text-3xl lg:pb-4 lg:mb-6">
				Want to add an entry?
			</h1>
			<Link to="/create-article-page" aria-label="Click here to add an entry">
				<button className="bg-green-600 font-text text-gray-200 text-sm rounded-lg py-1 px-2 mb-10 lg: text-base lg:py-2 lg:px-4">
					Create an article
				</button>
			</Link>
			<h1 className="font-text font-bold text-red-600 text-2xl border-b border-gray-500 border-solid pb-1 mb-3 lg:text-3xl lg:pb-4 lg:mb-6">
				Delete account
			</h1>
			<p className="font-text text-sm mb-3 lg:text-base lg:mb-4">
				This action is permanent, once deleted there is going back.
			</p>
			<button
				className="font-text text-red-600 text-sm border border-gray-500 rounded-lg py-1 px-2 lg:text-base lg:py-2 lg:px-4"
				onClick={() => setUserCommentModalIsShowing(true)}
			>
				Delete your account
			</button>
		</div>
	);
};

export default UserDashboard;
