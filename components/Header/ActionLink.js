import Link from "next/link";


const ActionLink = ({children,href,className}) => {
    return (
        <li>
            <Link className={`${className} text-sm font-semibold border border-white rounded-2xl py-5 px-7 xl:px-8`} href={href}>{children}</Link>
        </li>
    );
};

export default ActionLink;
