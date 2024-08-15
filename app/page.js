import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import HugeUpdate from "@/components/HugeUpdate/HugeUpdate";
import Profile from "@/components/Profile/Profile";
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
                <HugeUpdate />
                <Profile />
            </main>
        </>
    );
}
