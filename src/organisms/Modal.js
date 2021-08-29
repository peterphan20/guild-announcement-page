import React from "react";
import useModal from "../helpers/useModal";

const Modal = ({ text, clickHandler }) => {
	const { openModal, toggle } = useModal();
	return (
		<>
			{openModal ? (
				<div className="grid place-items-center fixed bg-backdrop top-0 left-0 w-full h-screen z-20">
					<div
						value={openModal}
						onClick={(e) => e.stopPropagation()}
						className="relative bg-gray-100 text-gray-900 rounded shadow p-8 mb-40 w-96 h-96 z-20"
					>
						<h1>{`Are you sure you want to delete this ${text}?`}</h1>
						<button className="bg-gray-300 text-gray-200 text-lg p-1" onClick={toggle}>
							Cancel
						</button>
						<button className="bg-red-600 text-gray-200 text-lg p-1" onClick={clickHandler}>
							Delete
						</button>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
