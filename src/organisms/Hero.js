import React from "react";
import background from "../assets/background.png";

const Hero = () => {
	return (
		<div
			className="mt-20 mb-8 pt-20 pb-20 px-8 bg-cover bg-gray-900 lg:mb-16 lg:pt-52 lg:pb-32 lg:px-56 "
			style={{ backgroundImage: `url(${background})` }}
		>
			<span id="home" className="block relative -top-36 lg:-top-60" />
			<h1 className="font-logo font-semibold text-3xl font-bold pb-1 lg:text-5xl">
				Welcome To Eldridge
			</h1>
			<h2 className="font-text text-sm font-normal font-headers pb-4 lg:text-xl lg:pb-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</h2>
			<button className="bg-indigo-600 font-logo text-md rounded py-3 px-6">
				<a href="https://guildroster.netlify.app/" target="_blank" rel="noreferrer">
					Meet The Roster
				</a>
			</button>
		</div>
	);
};

export default Hero;
