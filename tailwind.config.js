module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				dark_background: "hsl(240, 5%, 10%)",
				backdrop: "rgba(0, 0, 0, 0.3)",
				modal_shadow: "rgba(0, 0, 0, 0.2)",
			}),
			fontFamily: {
				logo: ["Overpass", "sans-serif"],
				headers: ["Ubuntu", "sans-serif"],
				text: ["Hind Madurai", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
