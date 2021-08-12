import React from "react";

const Buttons = ({ className, text }) => {
	return (
		<div>
			<button className={className} id={text}>
				{text}
			</button>
		</div>
	);
};

export default Buttons;
