import Image from "next/image";
import SectionHeading from "../SectionHeading";

import people from "@/public/people.webp";
const WiliamJohnson = () => {
    return (
        <section className="section-padding bg-vector">
            <div className="container flex flex-col lg:flex-row gap-10">
                <div className="flex-1 flex justify-center">
                    <Image src={people} alt="people" />
                </div>
                <div className="flex-1">
                    <SectionHeading className={"w-fit"}>
                        WILLIAM JOHNSON
                    </SectionHeading>
                    <p className="text-main font-light text-lg -mt-6 mb-8">
                        Regional Sales Director, Effective HVAC 
                    </p>
                    <p className="text-gray-300 font-light text-lg mb-8">
                        In the end, Leadbull made sustainable improvements to
                        our business lead gen strategy. We no longer conduct any
                        door-knocking for prospecting, which frees up time for
                        higher-value tasks. 
                    </p>
                    <p className="text-gray-300 font-light text-lg">
                        Leadbull all-inclusive telemarketing and digital
                        marketing solution also provided us a reliable source of
                        high-quality leads, which allowed our sales reps to
                        accelerate their goals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WiliamJohnson;
