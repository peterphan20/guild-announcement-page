import React from "react";

const InputFieldArticleCreation = ({ text, value, onChange, className = "" }) => {
	return (
		<div>
			<input
				type="text"
				className={`${className} bg-gray-100 text-gray-900 text-base outline-none py-3 px-2 w-full focus:ring-2 focus:ring-blue-500`}
				placeholder={text}
				value={value}
				onChange={onChange}
				require="true"
				autoFocus
			/>
		</div>
	);
};

export default InputFieldArticleCreation;
