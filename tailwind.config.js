/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1280px",
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: "12px",
        },
        extend: {
            colors: {
                main: "#027FCA",
                secondary: "#53040B",
            },
            backgroundImage: {
                "vector": "url(/vector.webp)"
            },
        },
    },
    plugins: [],
};
