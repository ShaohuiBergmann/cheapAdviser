import React from "react";
import Link from "next/link";
type Props = {};

function Nav({}: Props) {
    return (
        <div className="absolute  top-24 left-90 w-[500px] h-[800px] bg-slate-400">
            <nav className="text-2xl flex flex-col items-center space-y-3.5 mt-10">
                {" "}
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
            </nav>
        </div>
    );
}

export default Nav;
