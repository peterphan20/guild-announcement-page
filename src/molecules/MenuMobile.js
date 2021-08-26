import { useContext } from "react";
import MenuAnchorMobile from "../atoms/MenuAnchorMobile";
import { userDetailsContext } from "../context/UserDetailsProvider";

const MenuMobile = ({ setOpen, isOpen }) => {
	// eslint-disable-next-line
	const [userDetails, setUserDetails] = useContext(userDetailsContext);

	const handleClick = (id) => {
		setOpen(false);
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 300);
	};

	const handlePageChangeClick = () => {
		setOpen(false);
		window.scrollTo(0, 0);
	};

	const handleLogout = () => {
		setUserDetails({});
		localStorage.removeItem("authToken");
		setOpen(false);
		window.scrollTo(0, 0);
	};

	const token = localStorage.getItem("authToken");

	return (
		<nav
			className={`flex flex-col justify-center items-center fixed top-0 left-0 z-10 w-full h-screen bg-indigo-700 transition-all duration-500 ease-out transform ${
				isOpen ? "opacity-95 translate-y-0" : "opacity-0 -translate-y-full"
			}`}
		>
			<MenuAnchorMobile text="Home" link="/" clickHandler={() => handleClick("home")} />
			<MenuAnchorMobile text="Articles" link="/" clickHandler={() => handleClick("articles")} />
			<MenuAnchorMobile text="Gallery" link="/" clickHandler={() => handleClick("gallery")} />
			<MenuAnchorMobile text="About Us" link="/about-us" clickHandler={handlePageChangeClick} />
			{!token ? (
				<>
					<MenuAnchorMobile text="Login" link="/login" clickHandler={handlePageChangeClick} />
					<MenuAnchorMobile text="Sign Up" link="/sign-up" clickHandler={handlePageChangeClick} />
				</>
			) : (
				<>
					<MenuAnchorMobile
						text="Profile"
						link="/user-dashboard"
						clickHandler={handlePageChangeClick}
					/>
					<button
						className="text-xl font-logo font-semibold border-b-2 border-indigo-200 py-2 px-3 mt-8"
						onClick={handleLogout}
					>
						Sign Out
					</button>
				</>
			)}
		</nav>
	);
};

export default MenuMobile;
