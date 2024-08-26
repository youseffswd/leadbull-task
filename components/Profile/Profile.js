import SectionHeading from "../SectionHeading";
import Box from "./Box";
import Image from "next/image";
import eagle from "@/public/eagle.webp";
const Profile = () => {
    return (
        <section className="section-padding bg-vector bg-cover">
            <div className="container">
                <SectionHeading>Profile</SectionHeading>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    <div className="flex flex-col md:flex-row items-center  gap-5">
                        <div className="flex flex-1 flex-col gap-5">
                            <Box
                                title="Vision"
                                description="We enhance our data centers to personalize the contractor clients experience through telemarketing"
                            />
                            <Box
                                title="Mission"
                                description="Our mission is to be the leading innovator in the telemarketing industry through our cloud based Lead-Gen solutions"
                            />
                        </div>
                        <Box
                            className={"flex-1 "}
                            title="Values​"
                            description="Our core values include elimination of privacy concerns, and adherence to global marketing regulations"
                        />
                    </div>
                    <div className="max-w-[420px] mx-auto">
                        <Image src={eagle} alt="eagle" />
                        <h4 className="mx-auto w-fit mt-4 font-semibold text-3xl bg-gradient-to-r from-main to-secondary bg-clip-text text-transparent">
                            LEADBULL LLC
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
