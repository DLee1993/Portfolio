"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
    const pathname = usePathname();
    const links = ["/", "/challenges", "/info"];

    return (
        <menu className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-fit h-12 flex justify-between items-center gap-x-2 sm:gap-x-3 md:gap-x-4 p-2 text-xs sm:text-sm capitalize bg-csBlack/65 border-2 border-csWhite/5 backdrop-blur-md rounded-full">
            {links.map((link, index) => (
                <li
                    key={index}
                    className="relative w-28 grid place-items-center rounded-full hover:bg-csWhite/10 transition-colors;"
                >
                    {pathname === link && (
                        <motion.div
                            layoutId="active-pill"
                            style={{ originY: "0px" }}
                            className="absolute w-full h-full py-2 bg-white text-csBlack rounded-full -z-50"
                        ></motion.div>
                    )}
                    <Link
                        href={link}
                        className={`w-full h-full py-2 grid place-items-center rounded-full ${
                            pathname === link && "text-csBlack"
                        }`}
                        scroll={false}
                    >
                        {link === "/" ? "case studies" : `${link.split("/")[1]}`}
                    </Link>
                </li>
            ))}
        </menu>
    );
}
