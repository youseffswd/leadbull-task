import Image from "next/image";

import Logo from "@/public/logo.webp";
import Link from "next/link";
const HeaderLogo = () => {
    return (
        <Link href="/" className="logo relative w-36 md:w-40 lg:w-44 xl:w-56">
            <Image src={Logo} alt="Logo" placeholder="blur" priority />
        </Link>
    );
};

export default HeaderLogo;
