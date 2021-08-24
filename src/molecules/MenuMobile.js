import { useContext } from "react";
import MobileMenuAnchor from "../atoms/MenuAnchorMobile";
import { userDetailsContext } from "../context/UserDetailsProvider";

const MobileMenu = ({ setOpen, isOpen }) => {
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

	return (
		<nav
			className={`fixed top-0 left-0 z-10 w-full h-screen bg-indigo-700 transition-all duration-500 ease-out transform flex flex-col justify-center items-center ${
				isOpen ? "opacity-95 translate-y-0" : "opacity-0 -translate-y-full"
			}`}
		>
			<MobileMenuAnchor text="Home" link="/" clickHandler={() => handleClick("home")} />
			<MobileMenuAnchor text="Articles" link="/" clickHandler={() => handleClick("articles")} />
			<MobileMenuAnchor text="Gallery" link="/" clickHandler={() => handleClick("gallery")} />
			<MobileMenuAnchor text="About Us" link="/about-us" clickHandler={handlePageChangeClick} />
			<MobileMenuAnchor
				text="Profile"
				link="/user-dashboard"
				clickHandler={handlePageChangeClick}
			/>
			<MobileMenuAnchor
				text="Add article"
				link="/create-article-page"
				clickHandler={handlePageChangeClick}
			/>
			{/* {!token ? (
				<>
				<MobileMenuAnchor text="Login" link="/login" clickHandler={handlePageChangeClick} />
				<MobileMenuAnchor text="Sign Up" link="/sign-up" clickHandler={handlePageChangeClick} />
				</>
			) : (
				<button
					className="text-xl font-logo font-semibold border-b-2 border-indigo-200 py-2 px-3 mt-8"
					onClick={handleLogout}
				>
					Sign Out
				</button>
			)} */}
			<MobileMenuAnchor text="Login" link="/login" clickHandler={handlePageChangeClick} />
			<MobileMenuAnchor text="Sign Up" link="/sign-up" clickHandler={handlePageChangeClick} />
			<button
				className="text-xl font-logo font-semibold border-b-2 border-indigo-200 py-2 px-3 mt-8"
				onClick={handleLogout}
			>
				Sign Out
			</button>
		</nav>
	);
};

export default MobileMenu;
