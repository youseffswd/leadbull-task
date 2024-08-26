import Achievments from "@/components/Achievments/Achievments";
import Hero from "@/components/Hero/Hero";
import HugeUpdate from "@/components/HugeUpdate/HugeUpdate";
import OurSolution from "@/components/OurSolution/OurSolution";
import Profile from "@/components/Profile/Profile";
import Revenue from "@/components/Revenue/Revenue";
import Updates2024 from "@/components/Updates2024/Updates2024";
import WiliamJohnson from "@/components/WiliamJohnson/WiliamJohnson";

export default async function Home() {

    return (
        <>
            <Hero />
            <HugeUpdate />
            <Profile />
            <OurSolution />
            <Achievments />
            <Revenue />
            <Updates2024 />
            <WiliamJohnson />
        </>
    );
}
