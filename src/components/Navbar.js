import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-between py-5 px-10 top-0 left-0 position:fixed">
			<Link to="/" className="font-headers font-bold text-3xl">
				Eldridge
			</Link>
			<div className="flex gap-12">
				<Link to="/">
					<button className="font-text font-bold text-xl bg-gray-100 text-gray-900 hover:text-indigo-600">
						Home
					</button>
				</Link>
				<Link to="/aboutUs">
					<button className="font-text font-bold text-xl bg-gray-100 text-gray-900 hover:text-indigo-600">
						About
					</button>
				</Link>
				<Link>
					<button className="font-text font-bold text-xl bg-gray-100 text-gray-900 hover:text-indigo-600">
						Roster
					</button>
				</Link>
				<Link to="/login">
					<button className="font-text font-bold text-xl bg-gray-100 text-gray-900 hover:text-indigo-600">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
