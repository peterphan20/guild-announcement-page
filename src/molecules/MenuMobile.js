import React from "react";
import MobileMenuAnchor from "../atoms/MenuAnchorMobile";

const MobileMenu = ({ setOpen, isOpen }) => {
	const handleClick = (id) => {
		setOpen(false);
		setTimeout(() => {
			document.getElementById(id).scrollIntoView();
		}, 300);
	};

	return (
		<nav
			className={`fixed top-0 left-0 z-10 w-full h-screen bg-indigo-700 transition-all duration-500 ease-out transform flex flex-col justify-center items-center ${
				isOpen ? "opacity-95 translate-y-0" : "opacity-0 -translate-y-full"
			}`}
		>
			<MobileMenuAnchor text="Home" link="/" clickHandler={() => handleClick("root")} />
			<MobileMenuAnchor
				text="Articles"
				link="/articles"
				clickHandler={() => handleClick("articles")}
			/>
			<MobileMenuAnchor
				text="Gallery"
				link="/gallery"
				clickHandler={() => handleClick("gallery")}
			/>
			<MobileMenuAnchor
				text="About Us"
				link="/aboutUs"
				clickHandler={() => handleClick("about-us")}
			/>
			<MobileMenuAnchor text="Sign In" link="/login" clickHandler={() => handleClick("login")} />
		</nav>
	);
};

export default MobileMenu;
