import React from "react";

const Hero = () => {
	return (
		<section className="font-logo font-semibold pt-36 pb-8 px-8 mb-8">
			<span id="home" className="block relative -top-32" />
			<h1 className="text-3xl font-bold pb-1">Welcome To Eldridge</h1>
			<h2 className="text-sm font-normal font-headers pb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</h2>
			<button className="bg-indigo-600 font-logo text-md rounded py-3 px-6">
				<a href="https://guildroster.netlify.app/" target="_blank" rel="noreferrer">
					Meet The Roster
				</a>
			</button>
		</section>
	);
};

export default Hero;
