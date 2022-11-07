import React from "react";
import Image from "next/image";

type Props = {};

function Logo({}: Props) {
    return (
        <span className="fixed w-24 h-24 top-12 left-56 ">
            <Image
                className="relative mx-auto object-contain"
                layout="fill"
                src="/logo.png"
                alt="Loading"
            />
        </span>
    );
}

export default Logo;
