import React from "react";
import Logo from "./Logo";
import Link from "next/link";

import HamburgerMenu from "./HamburgerMenu";

type Props = {};

function Header({}: Props) {
    return (
        <header className="text-[#4f4a0c] sticky top-10 p-5  max-w-7xl mx-auto">
            <Logo />
            <HamburgerMenu />
        </header>
    );
}

export default Header;
