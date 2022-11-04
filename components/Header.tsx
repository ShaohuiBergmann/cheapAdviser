import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
    return (
        <header className="text-[#0b7562] sticky top-10 p-5 flex items-sart justify-between max-w-7xl mx-auto">
            <span className="fixed top-10 left-20 w-20 h-20">
                <Logo />
            </span>
            <Link href="/">
                <button>关于我们</button>
            </Link>
            <Link href="/">
                <button>我们的服务</button>
            </Link>
            <Link href="/">
                <button>教师团队</button>
            </Link>
            <Link href="/">
                <button>教师团队</button>
            </Link>
            <Link href="/">
                <button>合作学校</button>
            </Link>
            <Link href="/">
                <button>线上教学</button>
            </Link>
            <Link href="/">
                <button>教师团队</button>
            </Link>
            <Link href="/">
                <button>学员反馈</button>
            </Link>
            <Link href="/">
                <button>我们的价格</button>
            </Link>
            <Link href="/">
                <button>联系我们</button>
            </Link>
        </header>
    );
}

export default Header;
