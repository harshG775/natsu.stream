/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
	theme: {
        fontFamily: {
            "Source-Sans-Pro": ["Source Sans Pro", "sans-serif"]
          },
          extend: {
            transitionProperty: {
                "size": "width, height",
            },
            colors: {
                primary_clr: "rgb(255, 88, 51)",
            },
        },
	},
	plugins: [],
    darkMode: "class",
};