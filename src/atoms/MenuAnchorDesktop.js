import React from "react";
import { Link } from "react-router-dom";

const MenuAnchorDesktop = ({ link, text, clickHandler }) => {
	return (
		<>
			<Link
				to={link}
				className="text-lg font-logo font-semibold py-1 px-3 border-b border-gray-800 hover:border-b hover:border-indigo-200 hover:text-indigo-600"
				onClick={clickHandler}
				aria-label={`Click the anchor link to take you to the ${text} section of the page`}
			>
				{text}
			</Link>
		</>
	);
};

export default MenuAnchorDesktop;
