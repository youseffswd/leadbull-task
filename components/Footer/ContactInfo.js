import Image from "next/image";
import location from "@/public/icons/location.svg";
import email from "@/public/icons/email.svg";
import phone from "@/public/icons/phone.svg";
const ContactInfo = () => {
    return (
        <ul className="mt-6 space-y-4">
            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 flex items-center gap-3">
                <Image src={location} alt="Location" />
                131 Continental Dr, Suite 305, Newark, DE 19713
            </li>

            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 flex items-center gap-3">
                <Image src={email} alt="Email" />
                Sales@Leadbull.net
            </li>

            <li className="text-gray-700 transition hover:opacity-75 dark:text-gray-200 flex items-center gap-3">
                <Image src={phone} alt="Phone" />
                +1 484 857 2782
            </li>
        </ul>
    );
};

export default ContactInfo;
