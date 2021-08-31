import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import DesktopMenu from "../molecules/MenuDesktop";
import MenuMobile from "../molecules/MenuMobile";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { persistAuthentication } from "../helpers/usersCRUD";

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setOpen] = useState(false);
	// eslint-disable-next-line
	const [userDetails, setUserDetails] = useContext(userDetailsContext);

	useEffect(() => {
		async function fetchAuthentication() {
			const token = localStorage.getItem("authToken");
			if (!token) return;

			const response = await persistAuthentication(token);
			console.log("response object", response);
			setUserDetails(response.id);
		}
		fetchAuthentication();
	}, [setUserDetails]);

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
		<div className="flex justify-between items-center fixed top-0 left-0 bg-gray-800 text-gray-200 py-4 px-8 z-20 w-full lg:py-3 lg:px-56">
			<Link
				to="/"
				className="flex self-end font-logo font-bold text-4xl lg:py-3 lg:text-4xl lg:hover:text-indigo-600"
				onClick={() => setTimeout(() => window.scrollTo(0, 0), 250)}
				label="Clicking this logo takes you to the top of the page"
			>
				Eldridge
			</Link>
			{showMenu()}
			<MenuMobile setOpen={setOpen} isOpen={isOpen} />
		</div>
	);
};

export default Header;
