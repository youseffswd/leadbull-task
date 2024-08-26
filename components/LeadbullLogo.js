import Image from "next/image";

import Logo from "@/public/logo.webp";
import Link from "next/link";
const LeadbullLogo = ({className}) => {
    return (
        <Link href="/" className={`block logo relative ${className}`}>
            <Image src={Logo} alt="Logo" placeholder="blur" priority={true} />
        </Link>
    );
};

export default LeadbullLogo;
