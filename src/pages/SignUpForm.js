import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../assets/logo5.png";
import InputLoginMobile from "../atoms/InputFieldLogin";
import { createUser } from "../helpers/usersCRUD";

const SignUpForm = () => {
	const [signUpusername, setSignUpusername] = useState("");
	const [signUppassword, setsignUppassword] = useState("");
	const [authResponse, setAuthResponse] = useState("");
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
		<div className="flex flex-col justify-center items-center bg-darkBackground -mt-24 px-8 w-full h-screen lg:-mt-32 lg:h-screen">
			<img src={logo} alt="Eldridge's logo" />
			<h1 className="font-logo text-gray-200 text-2xl text-center pb-5 lg:text-2xl">
				New to Eldridge? Sign Up Here!
			</h1>
			<div className="flex flex-col justify-center items-center font-text bg-gray-800 text-gray-200 rounded pb-8 pt-2 px-5 w-full lg:pb-16 lg:pt-6 lg:px-10 lg:w-96">
				<div className="pb-6">
					{authResponse ? (
						<p className="text-sm border-2 border-red-600 rounded-xl py-3 px-6">{authResponse}</p>
					) : (
						""
					)}
				</div>
				<label htmlFor="password" className="text-sm pb-2 self-start lg:text-base">
					Username
				</label>
				<InputLoginMobile
					id="username"
					className="lg:py-2 lg:px-4"
					value={signUpusername}
					onChange={(e) => setSignUpusername(e.target.value)}
				/>
				<label htmlFor="password" className="text-sm pb-2 self-start lg:text-base">
					Password
				</label>
				<InputLoginMobile
					id="password"
					className="lg:py-2 lg:px-4"
					value={signUppassword}
					onChange={(e) => setsignUppassword(e.target.value)}
				/>
				<button
					className="bg-indigo-600 text-base rounded-lg p-1 mt-2 mb-3 w-full lg:text-lg lg:p-2"
					onClick={onHandleUserCreate}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default SignUpForm;
