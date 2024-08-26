import Link from "next/link";

const FooterLink = ({children,href}) => {
    return (
        <Link
            href={href}
            className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
        >
            {children}
        </Link>
    );
};

export default FooterLink;
