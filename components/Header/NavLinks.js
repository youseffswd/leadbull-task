import ActionLink from "./ActionLink";
import NavLink from "./NavLink";

const NavLinks = ({ open }) => {
    const translate =
        (open ? "translate-x-[0%]" : "translate-x-[100%]") +
        " lg:translate-x-[0%]";
    const position = `absolute lg:static z-10 top-0 right-0`;
    const background = `bg-[rgba(255,255,255,.05)] backdrop-blur-lg lg:bg-transparent lg:backdrop-none`;
    const sizing = `h-screen lg:h-auto w-64 md:w-96 lg:w-full pt-32 pb-10 lg:pt-0 lg:pb-0`;
    const lg = ``;
    const xl = ``;
    return (
        <nav
            className={`transition ${translate} overflow-y-auto lg:overflow-y-visible  ${position} ${background} text-center  ${sizing} ${lg} ${xl}`}
        >
            <ul className="text-lg md:text-xl  font-semibold flex flex-col lg:flex-row lg:items-center justify-center lg:justify-around lg:ml-16 xl:ml-32 lg:gap-5 xl:gap-10 ">
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About us</NavLink>
                <NavLink href="#">Services</NavLink>
                <NavLink href="#">Support</NavLink>
                <li className="ml-auto">
                    <ul className="flex flex-col lg:flex-row lg:items-center  justify-center lg:justify-end gap-5 mt-10 lg:mt-0">
                        <ActionLink className={`block`} href="#">Login</ActionLink>
                        <ActionLink className={`block`} href="#">Book An Appointment</ActionLink>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
