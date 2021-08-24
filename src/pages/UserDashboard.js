import { useState, useContext } from "react";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { deleteUser } from "../helpers/usersCRUD";

const UserDashboard = () => {
	const [editUsername, setEditUsername] = useState("");
	const [userDetails] = useContext(userDetailsContext);

	const onHandleDeleteUser = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		console.log(userDetails);
		await deleteUser(userDetails, token);
		console.log(`${userDetails} has been deleted`);
	};

	return (
		<div className="bg-darkBackground text-gray-100 pt-24 px-5 w-full h-screen">
			<label htmlFor="name">Name</label>
			<input
				type="text"
				className="bg-gray-100 text-gray-900 text-md outline-none py-3 px-2 w-full focus:ring-2 focus:ring-blue-500"
				value={editUsername}
				onChange={(e) => setEditUsername(e.target.value)}
				require="true"
				autoFocus
			/>
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
