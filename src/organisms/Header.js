import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hamburger from "hamburger-react";
import DesktopMenu from "../molecules/MenuDesktop";
import MobileMenu from "../molecules/MenuMobile";

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
		if (windowWidth > 864) {
			setOpen(false);
		}

		return window.removeEventListener("resize", () => {
			console.log("Resize listener cleaned up");
		});
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 864 ? (
			<DesktopMenu />
		) : (
			<span className="z-20">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</span>
		);
	};

	return (
		<div className="">
			<header className="container max-w-screen-lg mx-auto pt-9 pb-7 px-8 flex justify-between items-end text-gray-900">
				<Link
					to="/"
					className="font-headers font-bold text-3xl"
					onClick={() => setTimeout(() => window.scrollTo(0, 0), 250)}
					label="Clicking this logo takes you to the top of the page"
				>
					Eldridge
				</Link>
				{showMenu()}
				<MobileMenu setOpen={setOpen} isOpen={isOpen} />
			</header>
		</div>
	);
};

export default Header;
