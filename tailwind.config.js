/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
		colors: {
			bgColor: "#F5EBEB",
			textColor: "#2D2424",
			primary: "#867070",
			secondary: "#D5B4B4",
			ternary: "#E4D0D0",
			bgColorDark: "#1F2937",
		},
		fontFamily: {
			geologica: ["Geologica", "sans-serif"],
		},
	},
	plugins: [],
};
