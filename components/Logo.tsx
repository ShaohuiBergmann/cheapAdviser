import React from "react";
import Image from "next/image";

type Props = {};

function Logo({}: Props) {
    return <Image className="relative mx-auto object-contain" layout="fill" src="/logo.png" alt="Loading" />;
}

export default Logo;
