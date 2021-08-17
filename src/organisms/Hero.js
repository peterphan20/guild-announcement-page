import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section className="font-logo font-semibold mt-20 mb-10 py-10 px-8">
			<span id="home" className="block relative -top-32" />
			<h1 className="text-xl font-bold pb-1">WELCOME TO ELDRIDGE</h1>
			<h2 className="text-base pb-4">WANT TO MAKE HISTORY?</h2>
			<Link to="/login">
				<button className="bg-indigo-600 text-base rounded py-1 px-5">
					Join Now
				</button>
			</Link>
		</section>
	);
};

export default Hero;
