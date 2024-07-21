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
            },
            fontFamily: {
                inter: "var(--font-inter)",
            },
            fontSize: {
                small: "var(--fs-sm)",
                baseline: "var(--fs-base)",
                medium: "var(--fs-md)",
                large: "var(--fs-lg)",
                xlarge: "var(--fs-xl)",
                xxlarge: "var(--fs-xxl)",
                xxxlarge: "var(--fs-xxxl)",
            },
        },
    },
    plugins: [],
};
export default config;
