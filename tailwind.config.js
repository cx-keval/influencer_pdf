/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                xs: "10px",
                sm: "12px",
                base: "14px",
                lg: "16px",
                xl: "18px",
                "2xl": "20px",
                "3xl": "24px",
                "4xl": "30px",
                "5xl": "36px",
                "6xl": "48px",
                "7xl": "60px",
                "8xl": "72px",
                "9xl": "96px",
            },
        },
    },
    plugins: [],
};
