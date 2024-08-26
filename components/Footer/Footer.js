import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";
import dynamic from "next/dynamic";
import FooterLinks from "./FooterLinks";
import FooterTitle from "./FooterTitle";
const CopyRight = dynamic(
    () => import("./CopyRight"),
    {
        ssr: false,
    }
);

const Footer = () => {
    return (
        <footer className="pt-16">
            <div className="container space-y-8 lg:space-y-16 ">
                <div className="flex flex-col gap-14 xl:gap-28 xl:flex-row">
                    <CompanyInfo />

                    <div className="flex flex-col flex-1 xl:pt-16 gap-14 xl:gap-24 md:flex-row md:gap-10 md:justify-between">
                        <div className="flex justify-start">
                            <div className="w-fit">
                                <FooterTitle>Quick Links</FooterTitle>

                                <FooterLinks />
                            </div>
                        </div>

                        <div>
                            <FooterTitle>Contact Info</FooterTitle>

                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight />
        </footer>
    );
};

export default Footer;
