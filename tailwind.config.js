module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				darkBackground: "hsl(240, 7%, 6%)",
				darkAccent: "hsl(240, 5%, 10%)",
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
