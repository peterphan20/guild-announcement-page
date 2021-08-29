import { useEffect } from "react";
import Image from "../atoms/Image";

const AboutPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-dark_background text-gray-200 py-20 px-3 w-full h-screen min-h-screen lg:h-full lg:px-56">
			<p className="text-center font-logo font-semibold border-b-2 border-indigo-200 py-1 mt-5 mb-7 lg:text-3xl lg:mt-10">
				About Us
			</p>
			<Image src="https://rb.gy/e3jfnl" alt="esports stadium" className="lg:w-96 lg:h-96" />
			<p className="font-text text-base mt-7 lg:text-xl">
				Founded in 2021, this is a guild announcements website that provides articles on gaming
				related news as well as a gallery of stock images. The purpose of this project is to
				practive the PFRN (postgres, fastify, react, node) stack. Currently not taking any
				contribututions, but feel free to use this project as a template!
			</p>
		</div>
	);
};

export default AboutPage;
