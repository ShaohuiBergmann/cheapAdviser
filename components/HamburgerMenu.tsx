import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import { useState, useEffect } from "react";

type Props = {};

function HamburgMenu({}: Props) {
    const [isPopup, setIsPopup] = useState(false);
    const handlePopup = () => {
        setIsPopup(!isPopup);
    };

    return (
        <div>
            <span className=" fixed w-24 h-24 top-12 right-56">
                <Image
                    className="relative mx-auto object-contain "
                    layout="fill"
                    src="/burger.png"
                    alt="Loading"
                    onClick={() => handlePopup()}
                />
                {isPopup && <Nav />}
            </span>
        </div>
    );
}

export default HamburgMenu;
