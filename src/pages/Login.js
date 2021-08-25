import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import InputFieldLogin from "../atoms/InputFieldLogin";
import { userSignIn } from "../helpers/usersCRUD";
import { userDetailsContext } from "../context/UserDetailsProvider";

const Login = () => {
	const [loginusername, setLoginUsername] = useState("");
	const [loginpassword, setLoginPassword] = useState("");
	const [authResponse, setAuthResponse] = useState("");
	// eslint-disable-next-line
	const [userDetails, setUserDetails] = useContext(userDetailsContext);
	const history = useHistory();

	const onHandleSignIn = async () => {
		const userObj = {
			username: loginusername,
			password: loginpassword,
		};

		const response = await userSignIn(userObj);

		if (response.code === 200) {
			// TODO: if sign in successful, then set local storage and set state
			localStorage.setItem("authToken", response.token);
			setUserDetails(response.userId);
			setAuthResponse("");
			history.push("/");
		} else {
			// TODO: if not successful, then tell users invalid sign in
			setAuthResponse(response.message);
			console.log("something went wrong");
		}
	};

	return (
		<div className="bg-darkBackground pt-32 px-8 w-full h-screen">
			<h1 className="font-logo text-gray-200 text-2xl text-center pb-5">Login to Eldridge</h1>
			<div className="flex flex-col justify-center items-center font-text bg-gray-800 text-gray-200 rounded pb-8 pt-2 px-5 w-full">
				<div className="pb-6">
					{authResponse ? (
						<p className="text-sm border-2 border-red-600 rounded-xl py-3 px-6">{authResponse}</p>
					) : (
						""
					)}
				</div>
				<label htmlFor="username" className="text-sm pb-2 self-start">
					Username
				</label>
				<InputFieldLogin
					id="username"
					value={loginusername}
					onChange={(e) => setLoginUsername(e.target.value)}
				/>
				<label htmlFor="password" className="text-sm pb-2 self-start">
					Password
				</label>
				<InputFieldLogin
					id="password"
					value={loginpassword}
					onChange={(e) => setLoginPassword(e.target.value)}
				/>
				<button
					className="bg-indigo-600 text-md rounded-lg p-1 mt-2 mb-3 w-full"
					onClick={onHandleSignIn}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
