import React from "react";
import { Link } from "react-router-dom";

const MenuAnchorMobile = ({ link, text, clickHandler }) => {
	return (
		<>
			<Link
				to={link}
				className="text-xl font-logo font-semibold border-b-2 border-indigo-200 py-2 px-3 mt-8"
				onClick={clickHandler}
				aria-label={`Click the anchor link to take you to the ${text} section of the page`}
			>
				{text}
			</Link>
		</>
	);
};

export default MenuAnchorMobile;
