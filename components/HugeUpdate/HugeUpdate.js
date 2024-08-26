import Arrows from "./Arrows";
import Caption from "./Caption";
import Information from "./Information";

const HugeUpdate = () => {
    return (
        <section className={`section-padding bg-vector bg-cover`}>
            <div className="container">
                <Caption />
                <div className="relative lg:h-[1000px] lg:mb-10 xl:mb-0">
                    <Arrows />
                    <div className="md:flex md:items-center md:gap-10">
                        <Information
                            className="lg:absolute lg:left-[-28px] lg:bottom-[-40px] xl:left-[0px] xl:bottom-[25px] "
                            h3={"History"}
                            p={
                                "As the leading company in the marketing industry with a passion for innovation and A+ excellence, Leadbull has become a household name in the digital sales world, known for its groundbreaking lead generation"
                            }
                        />
                        <Information
                            className="lg:absolute lg:right-[-28px] lg:bottom-[-40px] xl:right-[0px] xl:bottom-[25px] "
                            h3={"About us"}
                            p={
                                "Leadbull stays current with the market trends aiming not only to thrive but also to enhance in such a rapidly evolving digital age, and to keep up its marketing services with the client’s expectations worldwide."
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HugeUpdate;
