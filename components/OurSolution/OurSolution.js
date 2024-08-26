import React from "react";
import SectionHeading from "../SectionHeading";
import SectionSubHeading from "../SectionSubHeading";
import Image from "next/image";
import ourSolutionImage from "@/public/our-solution.png";
import SkewedBackground from "../SkewedBackground";
const OurSolution = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container">
                <div>
                    <SectionHeading>OUR SOLUTION APPROACH</SectionHeading>
                    <SectionSubHeading className="text-center">
                        By offering tailored telemarketing and digital marketing
                        solutions that are designed to meet the unique needs of
                        each client, Leadbull LLC Technologies is able to
                        provide unparalleled value pushing its clients to handle
                        increased estimates.
                    </SectionSubHeading>
                </div>
                <div className="flex justify-center mt-10">
                    <Image src={ourSolutionImage} alt="Our Solution" />
                </div>
            </div>
            <SkewedBackground />
        </section>
    );
};

export default OurSolution;
