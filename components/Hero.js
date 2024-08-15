import { K2D } from "next/font/google";
import { Kaisei_Opti } from "next/font/google";
import Image from "next/image";
import B from "@/public/B-in-Leadbull.svg";
import eagle from "@/public/eagle.webp";
const k2d = K2D({ subsets: ["latin"], weight: ["700"] });
const kaisei_opti = Kaisei_Opti({ subsets: ["latin"], weight: ["500"] });
const Hero = () => {
    return (
        <section className="mt-52 pb-48">
            <div className="container">
                {/* Animation in globals.css */}
                <div className="text-center">
                    <h1
                        className={`${k2d.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex justify-center items-end font-bold`}
                    >
                        <span className="light-up-down">
                            <span
                                className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] ${kaisei_opti.className}`}
                            >
                                L
                            </span>
                            EAD
                        </span>
                        <span className="mb-1 -mx-1">
                            <Image className="w-[54px] sm:w-[68px] md:w-[88px] lg:w-[116px] xl:w-[132px] " src={B} alt="B" />{" "}
                        </span>
                        <span className="light-up-down">ULL</span>
                    </h1>
                    <p className="mt-5 text-gray-300 text-base sm:text-lg md:text-xl xl:text-2xl">
                        Ultra Targeted Leads & Sales, Let&apos;s Prey
                    </p>
                </div>
                <div className="flex justify-center relative mt-16">
                    <Image src={eagle} alt="hero Image" priority={true} />
                    {/* in Global.css file */}
                    <div className="light" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
