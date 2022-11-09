import React from "react";
import Link from "next/link";
type Props = {};

function Nav({}: Props) {
    return (
        <div className="absolute top-20 w-[800px] h-auto  bg-[#FEC84D] shadow-2xl">
            <nav className="text-2xl  flex flex-col items-start space-y-3.5 mt-10">
                {" "}
                <Link href="#about">
                    <button>关于我们</button>
                </Link>
                <Link href="#custmors">
                    <button>合适人群</button>
                </Link>
                <Link href="#services">
                    <button>我们的服务</button>
                </Link>
                <Link href="#reasons">
                    <button>选择我们</button>
                </Link>
                <Link href="#teachers">
                    <button>教师团队</button>
                </Link>
                <Link href="#schools">
                    <button>合作学校</button>
                </Link>
                <Link href="#onlineCourses">
                    <button>线上教学</button>
                </Link>
                <Link href="#feedbacks">
                    <button>学员反馈</button>
                </Link>
                <Link href="#prices">
                    <button>我们的价格</button>
                </Link>
                <Link href="#photos">
                    <button>照片墙</button>
                </Link>
                <Link href="#contact">
                    <button>联系我们</button>
                </Link>
            </nav>
        </div>
    );
}

export default Nav;
