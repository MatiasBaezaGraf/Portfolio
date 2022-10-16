/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                tablet: "700px",
                laptop: "1024px",
                desktop: "1920px",
            },
            colors: {
                "input-form": "rgba(64, 64, 64, 0.72)",
            },
            backgroundImage: {
                "split-dark": `linear-gradient(70deg, rgba(10, 10, 10, 0.5)  30%, rgba(0,0,0,0) 30%), linear-gradient(110deg, rgb(25, 25, 25) 35%, rgb(31, 31, 31) 35%);`,
                "split-light": `linear-gradient(70deg, rgba(160, 160, 160, 0.5)  30%, rgba(0,0,0,0) 30%), linear-gradient(110deg, rgb(180, 180, 180) 35%, rgb(205, 205, 205) 35%);`,
                project:
                    "linear-gradient(rgba(10,10,10,0.8) 35%, rgba(0,0,0,0.0)) ",
            },
            fontFamily: {
                main: ["Open Sans", "sans-serif"],
                second: ["Source Sans Pro", "sans-serif"],
            },
        },
        screens: {
            md: "720px",
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
