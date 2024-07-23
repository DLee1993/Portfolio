import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                csBlack: "#101010",
                csWhite: "#F2F2F2",
                csFadedWhite: "rgba(242,242,242, 0.5)",
                csPurple: "#432B89",
                csGreen: "#254441",
                csBlue: "#102542",
                csRed: "#621B00",
                csOrange: "#FF6B00",
            },
            fontFamily: {
                inter: "var(--font-inter)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
