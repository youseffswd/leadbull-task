import skype from "@/public/icons/skype.svg";
import Image from "next/image";


const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    return (
        <p className="text-xs border-t border-t-white mt-20 text-gray-500 dark:text-gray-400">
            <div className="container flex justify-between py-4">
                <span className="flex items-center gap-2 text-white text-base font-extralight">
                    <Image src={skype} alt="Skype" />
                    live:.cid.b503d7750b5e4c7b
                </span>
                <span>&copy; {currentYear}. Leadbull. All rights reserved.</span>
            </div>
        </p>
    );
};

export default CopyRight;
