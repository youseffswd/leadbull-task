import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
    const path = usePathname();

    let active = path === href ? true : false;

    const afterStyle =
        `lg:after:content-[''] lg:after:absolute lg:after:bottom-[-6px] lg:after:left-0 lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-main lg:after:to-secondary lg:after:opacity-${active ? 1 : 0} lg:after:transition lg:after:scale-x-${active ? 1 : 0}`;

    return (
        <Link
            className={`block py-5 lg:py-0 lg:px-1 w-full relative ${active && afterStyle}  hover:after:opacity-100 hover:after:scale-x-100`}
            href={href}
        >
            {active && (
                <>
                    <div className="lg:hidden absolute h-full top-0 left-0 w-1 bg-gradient-to-t from-main to-secondary" />
                    <div className="lg:hidden absolute h-full top-0 right-0 w-1 bg-gradient-to-t from-main to-secondary" />
                </>
            )}
            {children}
        </Link>
    );
};

export default NavLink;
