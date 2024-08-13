import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const FixedVideoBackground = dynamic(() => import("@/components/FixedVideoBackground"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Header />
              <FixedVideoBackground />
            <main>
                <Hero />
            </main>
        </>
    );
}
