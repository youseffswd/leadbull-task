import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/Footer";
const FixedVideoBackground = dynamic(
    () => import("@/components/FixedVideoBackground"),
    {
        ssr: false,
    }
);
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
        <html lang="en" className="overflow-x-hidden">
            <head>
                <link
                    rel="preload"
                    href="/eagle.webp"
                    as="image"
                    type="image/webp"
                />
            </head>
            <body className={robotoFlex.className}>
                <Header />
                <FixedVideoBackground />

                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
