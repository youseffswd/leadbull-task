import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    // weights: [400, 500, 700],
});

export const metadata = {
    title: "Lead Bull",
    description: "Ultra Targeted Leads & Sales, Let's Prey",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={robotoFlex.className}>{children}</body>
        </html>
    );
}
