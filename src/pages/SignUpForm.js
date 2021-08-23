import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import InputLoginMobile from "../atoms/InputFieldLogin";
import { createUser } from "../helpers/usersCRUD";

const SignUpForm = () => {
	const [signUpusername, setSignUpusername] = useState("");
	const [signUppassword, setsignUppassword] = useState("");
	const [authResponse, setAuthResponse] = useState("");
	// eslint-disable-next-line
	const history = useHistory();

	const onHandleUserCreate = async () => {
		const userObj = {
			username: signUpusername,
			password: signUppassword,
		};

		const response = await createUser(userObj);

		if (response.code === 201) {
			setAuthResponse("");
			history.push("/login");
		} else {
			// TODO: if not successful, then tell users invalid sign in
			setAuthResponse(response.message);
		}
	};

	return (
		<div className="bg-darkBackground pt-32 px-8 w-full h-screen">
			<h1 className="font-logo text-gray-200 text-xl text-center pb-5">
				New to Eldridge? Sign Up Here!
			</h1>
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
				<InputLoginMobile
					id="username"
					value={signUpusername}
					onChange={(e) => setSignUpusername(e.target.value)}
				/>
				<label htmlFor="password" className="text-sm pb-2 self-start">
					Password
				</label>
				<InputLoginMobile
					id="password"
					value={signUppassword}
					onChange={(e) => setsignUppassword(e.target.value)}
				/>
				<button
					className="bg-indigo-600 text-md rounded-lg p-1 mt-2 mb-3 w-full"
					onClick={onHandleUserCreate}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default SignUpForm;
