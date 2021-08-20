import React from "react";

const InputLoginMobile = ({ type, id, value, onClick }) => {
	return (
		<div className="flex justify-center items-center pb-4 w-full">
			<input
				type={type}
				id={id}
				className="bg-gray-100 text-gray-900 text-sm rounded-lg outline-none p-1 w-full focus:ring-2 focus:ring-blue-500"
				value={value}
				onClick={onClick}
				require="true"
				autoFocus
			/>
		</div>
	);
};

export default InputLoginMobile;
