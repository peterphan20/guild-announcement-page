import React from "react";
import Image from "../atoms/Image";

const AboutPage = () => {
	return (
		<div className="bg-darkAccent text-gray-200 w-full h-screen py-20 px-3">
			<p className="text-center font-logo font-semibold border-b-2 border-indigo-200 py-1 mt-5 mb-7">
				About Us
			</p>
			<Image src="https://rb.gy/e3jfnl" alt="esports stadium" />
			<p className="font-text mt-7">
				Founded in 2021, this is a guild announcements website that provides articles on gaming
				related news as well as a gallery of stock images. The purpose of this project is to
				practive the PFRN (postgres, fastify, react, node) stack. Currently not taking any
				contribututions, but feel free to use this project as a template!
			</p>
		</div>
	);
};

export default AboutPage;
