import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="font-body mt-10 py-10 px-8">
			<h1 className="text-xl font-bold pb-1">WELCOME TO ELDRIDGE</h1>
			<h2 className="text-base pb-4">WANT TO MAKE HISTORY?</h2>
			<Link to="/login">
				<button className="bg-indigo-600 text-gray-200 text-base border-gray-900 rounded py-1 px-5">
					Join Now
				</button>
			</Link>
		</div>
	);
};

export default Hero;
