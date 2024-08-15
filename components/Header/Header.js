"use client";

import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import NavLinks from "./NavLinks";
import HeaderLogo from "./HeaderLogo";
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="lg:container bg-black sticky top-0 z-10">
                <div className="flex items-center justify-between lg:justify-normal flex-wrap lg:flex-nowrap py-1  sm:px-6 md:px-8 lg:px-0 mt-6 relative">
                    <HeaderLogo />
                    <div className="absolute lg:hidden h-[calc(100%-1.25rem)] right-5 sm:right-6 md:right-8 flex items-center z-20">
                        <BurgerMenu onClick={setOpen} open={open} />
                    </div>
                    <NavLinks open={open} />
                    {open && (
                        <div
                            className="z-0 lg:hidden absolute h-screen w-screen inset-0"
                            onClick={() => setOpen(false)}
                        />
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
