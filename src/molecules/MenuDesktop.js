import { useContext } from "react";
import { userDetailsContext } from "../context/UserDetailsProvider";
import MenuAnchorDesktop from "../atoms/MenuAnchorDesktop";

const DesktopMenu = () => {
	// eslint-disable-next-line
	const [userDetails, setUserDetails] = useContext(userDetailsContext);

	const handleClick = (id) => {
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 250);
	};

	const handleLogout = () => {
		setUserDetails({});
		localStorage.removeItem("authToken");
		window.scrollTo(0, 0);
	};

	const token = localStorage.getItem("authToken");

	return (
		<div className="flex items-center gap-5">
			<MenuAnchorDesktop text="Home" link="/" clickHandler={() => handleClick("home")} />
			<MenuAnchorDesktop text="Articles" link="/" clickHandler={() => handleClick("articles")} />
			<MenuAnchorDesktop text="Gallery" link="/" clickHandler={() => handleClick("gallery")} />
			<MenuAnchorDesktop text="About Us" link="/about-us" />
			{!token ? (
				<>
					<MenuAnchorDesktop text="Login" link="/login" />
					<MenuAnchorDesktop text="Sign Up" link="/sign-up" />
				</>
			) : (
				<>
					<MenuAnchorDesktop text="Profile" link="/user-dashboard" />
					<button
						className="text-lg font-logo font-semibold py-1 px-3 border-b border-gray-800 hover:border-b hover:border-indigo-200 hover:text-indigo-600"
						onClick={handleLogout}
					>
						Sign Out
					</button>
				</>
			)}
		</div>
	);
};

export default DesktopMenu;
