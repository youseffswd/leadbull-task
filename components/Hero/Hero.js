import { K2D } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";
import B from "@/public/icons/B-in-Leadbull.svg";
import eagle from "@/public/eagle.webp";
const k2d = K2D({ subsets: ["latin"], weight: ["700"] });
const kaiseiDecol = Noto_Serif({
    subsets: ["latin"],
    weight: "500",
    display: "swap",
});
const Hero = () => {
    return (
        <section className="mt-52 pb-48">
            <div className="container">
                {/* Animation in globals.css */}
                <div className="text-center max-w-[22rem] sm:max-w-[430px] lg:max-w-[573px] xl:max-w-[736px]  mx-auto">
                    <h1
                        className={`${k2d.className} text-6xl sm:text-7xl lg:text-8xl xl:text-9xl flex justify-center items-end font-bold`}
                    >
                        <span className="light-up-down">
                            <span
                                className={`text-7xl sm:text-8xl lg:text-9xl xl:text-[160px] ${kaiseiDecol.className}`}
                            >
                                L
                            </span>
                            EAD
                        </span>
                        <span className="mb-1 -mx-1">
                            <Image
                                className="w-[68px] sm:w-[88px] lg:w-[116px] xl:w-[132px] "
                                src={B}
                                alt="B"
                                priority={true}
                            />
                        </span>
                        <span className="light-up-down">ULL</span>
                    </h1>
                    <p className="mt-5 text-gray-300 text-base sm:text-lg md:text-xl xl:text-2xl">
                        Ultra Targeted Leads & Sales, Let&apos;s Prey
                    </p>
                    <div className="flex justify-center relative mt-16">
                        <Image
                            src={eagle}
                            width={513}
                            height={295}
                            alt="hero Image"
                            placeholder="blur"
                            priority={true}
                        />
                        {/* in Global.css file */}
                        <div className="light" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
