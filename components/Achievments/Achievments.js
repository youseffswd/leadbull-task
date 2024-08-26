import Image from "next/image";
import SkewedBackground from "../SkewedBackground";
import achievments1 from "@/public/achievments-1.png";
import achievments2 from "@/public/achievments-2.png";
const Achievments = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container">
                <div className="flex justify-center">
                    <Image src={achievments1} alt="Achievments" />
                </div>
                <div className="flex justify-center mt-20">
                    <Image src={achievments2} alt="Achievments" />
                </div>
            </div>
            <SkewedBackground />
        </section>
    );
};

export default Achievments;
