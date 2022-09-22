/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "split-nav":
                    "linear-gradient(70deg, #454545 20%, #333333 20%);",
                "split-dark":
                    "linear-gradient(70deg, #101010 40%, #181818 40%);",
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
    plugins: [],
};
