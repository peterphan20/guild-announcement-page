import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hamburger from "hamburger-react";
import DesktopMenu from "../molecules/MenuDesktop";
import MobileMenu from "../molecules/MenuMobile";

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);

	const trackWindowChanges = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", trackWindowChanges);
		if (windowWidth > 864) {
			setOpen(false);
		}

		return () => {
			window.removeEventListener("resize", trackWindowChanges);
		};
	}, [windowWidth]);

	const showMenu = () => {
		return windowWidth > 864 ? (
			<DesktopMenu />
		) : (
			<span className="z-30">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</span>
		);
	};

	return (
		<header className="fixed top-0 left-0 container bg-gray-800 text-gray-200 max-w-screen-lg mx-auto py-4 px-8 flex justify-between items-end z-20">
			<Link
				to="/"
				className="font-logo font-bold text-3xl"
				onClick={() => setTimeout(() => window.scrollTo(0, 0), 250)}
				label="Clicking this logo takes you to the top of the page"
			>
				Eldridge
			</Link>
			{showMenu()}
			<MobileMenu setOpen={setOpen} isOpen={isOpen} />
		</header>
	);
};

export default Header;
