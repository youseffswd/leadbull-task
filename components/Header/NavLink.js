const NavLink = ({ children, href }) => {
    let active = false;
    const afterStyle = "lg:after:content-[''] lg:after:absolute lg:after:bottom-[-6px] lg:after:left-0 lg:after:w-full lg:after:h-1 lg:after:bg-gradient-to-r lg:after:from-main lg:after:to-secondary lg:after:opacity-0 lg:after:transition lg:after:scale-x-0";
    return (
        <li className={`${active}`}>
            <a className={`block py-5 lg:py-0 lg:px-1 w-full relative ${afterStyle} hover:after:opacity-100 hover:after:scale-x-100`} href={href}>
                {active && (
                    <>
                        <div className="absolute h-full top-0 left-0 w-1 bg-gradient-to-t from-main to-secondary" />
                        <div className="absolute h-full top-0 right-0 w-1 bg-gradient-to-t from-main to-secondary" />
                    </>
                )}
                {children}
            </a>
        </li>
    );
};

export default NavLink;
