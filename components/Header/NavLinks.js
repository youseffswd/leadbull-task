import ActionLink from "./ActionLink";
import NavLink from "./NavLink";

const NavLinks = ({ open }) => {
    const translate =
        (open ? "translate-x-[0%]" : "translate-x-[100%]") +
        " lg:translate-x-[0%]";
    const position = `absolute lg:static z-10 top-0 right-0`;
    const background = `bg-[rgba(255,255,255,.05)] backdrop-blur-lg lg:bg-transparent lg:backdrop-none`;
    const sizing = `h-screen lg:h-auto w-64 md:w-96 lg:w-full py-32 lg:pt-0 lg:pb-0`;
    const lg = ``;
    const xl = ``;
    return (
        <nav
            className={`transition -mt-6 ${translate} overflow-y-auto lg:overflow-y-visible  ${position} ${background} text-center  ${sizing} ${lg} ${xl}`}
        >
            <ul className="text-lg h-full md:text-xl  font-semibold flex gap-5 flex-col lg:flex-row lg:items-center justify-center lg:justify-around lg:ml-16 xl:ml-32 lg:gap-5 xl:gap-10 ">
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/about-us">About us</NavLink>
                </li>
                <li>
                    <NavLink href="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink href="/support">Support</NavLink>
                </li>
                <li className="mx-auto mt-auto">
                    <ul className="flex flex-col lg:flex-row lg:items-center  justify-center lg:justify-end gap-5 mt-10 lg:mt-0">
                        <ActionLink className={`block`} href="/login">
                            Login
                        </ActionLink>
                        <ActionLink
                            className={`block bg-gradient-to-l from-main to-secondary`}
                            href="/book-appointment"
                        >
                            Book an appointment
                        </ActionLink>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
