import React, { useState } from "react";
import InputLoginMobile from "../atoms/InputLoginMobile";
import { userSignIn } from "../helpers/usersCRUD";

const SignInForm = () => {
	const [loginusername, setLoginUsername] = useState("");
	const [loginpassword, setLoginPassword] = useState("");

	const onHandleSignIn = async () => {
		const userObj = {
			username: loginusername,
			password: loginpassword,
		};
		await userSignIn(userObj);
	};

	return (
		<div className="bg-darkBackground pt-32 px-10 w-full h-screen">
			<h1 className="font-logo text-gray-200 text-xl text-center pb-5">Sign In to Eldridge</h1>
			<div className="flex flex-col justify-center items-center font-text bg-gray-800 text-gray-200 py-7 px-10 w-full">
				<label htmlFor="username" className="text-sm pb-2 self-start">
					Username
				</label>
				<InputLoginMobile
					id="username"
					value={loginusername}
					clickHandler={(e) => setLoginUsername(e.target.value)}
				/>
				<label htmlFor="password" className="text-sm pb-2 self-start">
					Password
				</label>
				<InputLoginMobile
					id="password"
					value={loginpassword}
					clickHandler={(e) => setLoginPassword(e.target.value)}
				/>
				<button
					className="bg-indigo-600 text-md rounded-lg p-1 mt-2 mb-3 w-full"
					onClick={onHandleSignIn}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default SignInForm;
