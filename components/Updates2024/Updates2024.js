import SectionHeading from "../SectionHeading";
import SkewedBackground from "../SkewedBackground";
import LabeledProgress from "./LabeledProgress";

const Updates2024 = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container flex flex-col lg:flex-row gap-16">
                <div className="flex-1">
                    <SectionHeading className={"w-fit"}>
                        2024 Updates
                    </SectionHeading>
                    <p className="text-lg font-light text-gray-300 mb-8">
                        To increase our clients sales revenue and push their
                        average workflow estimates, Our company is developing،
                    </p>
                    <p className="text-lg font-light text-gray-300">
                        And will launch a wider variety of Lead-Gen models,
                        Digital sales opportunities, & and ultra targeted
                        Telemarketing services in the near future. Here’s a
                        sneak peek at what’s in the works.
                    </p>
                </div>
                <div className="flex-1">
                    <LabeledProgress
                        title="Inbound – Lead Generation"
                        desc="Leads | Location Ontario, Canada - HVAC"
                        percentage={40}
                    />
                    <LabeledProgress
                        title="Game-Changing Virtual Deals"
                        desc="Pre Closed | Location Ontario, Canada - HVAC, Solar"
                        percentage={48}
                    />
                    <LabeledProgress
                        title="Highest Conversion – Money Making"
                        desc="Hot Leads | Location United States - Solar"
                        percentage={58}
                    />
                    <LabeledProgress
                        title="Expanding – New Market"
                        desc="Hot Leads | Location Quebec, Canada - HVAC"
                        percentage={76}
                    />
                    <LabeledProgress
                        title="Top Selling – Various Prices"
                        desc="New Tier “A”,”B”,”C” Leads | Location Ontario, Canada - HVAC"
                        percentage={87}
                    />
                </div>
            </div>
            <SkewedBackground />
        </section>
    );
};

export default Updates2024;
