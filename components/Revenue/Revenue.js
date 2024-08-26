import Link from "next/link";
import SectionHeading from "../SectionHeading";
import SectionSubHeading from "../SectionSubHeading";
import Details from "./Details";

const Revenue = () => {
    return (
        <section className="section-padding bg-vector">
            <div className="container">
                <div>
                    <SectionHeading>OVER $9 MILLION</SectionHeading>
                    <SectionSubHeading className="text-center">
                        In combined revenue generated for our contractor clients
                    </SectionSubHeading>
                    <p className="text-gray-400 max-w-3xl mx-auto  xl:text-lg mt-8 font-ligt text-center">
                        Our services allow clients to gain a better chance of
                        fulfilling customers needs and catching their interest,
                        Leading to higher net revenue and sustained customer
                        satisfaction and loyalty. Many top global contractors
                        <Link
                            href="/about"
                            className="text-main underline font-bold ml-1"
                        >
                            Read more
                        </Link>
                    </p>
                </div>

                <Details />
            </div>
        </section>
    );
};

export default Revenue;
