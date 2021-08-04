import React from "react";
import { Link } from "react-router-dom";

const MobileMenuAnchor = ({ link, text, clickHandler }) => {
	return (
		<React.Fragment>
			<Link
				to={link}
				className="text-2xl border-b-4 border-indigo-100 p-2 mt-8"
				onClick={clickHandler}
				label={`Click the anchor link to jump to the ${text} section of the page`}
			>
				{text}
			</Link>
		</React.Fragment>
	);
};

export default MobileMenuAnchor;
