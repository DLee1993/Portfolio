"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
    const pathname = usePathname();

    return (
        <menu className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-96 h-12 flex justify-between items-center gap-x-2 sm:gap-x-3 md:gap-x-4 p-2 text-sm capitalize bg-csBlack/65 border-2 border-csWhite/5 backdrop-blur-md rounded-full">
            <li className={`menuLink ${pathname === "/" ? "active" : null}`}>
                <Link href="/">case studies</Link>
            </li>
            <li className={`menuLink ${pathname === "/challenges" ? "active" : null}`}>
                <Link href="/challenges">challenges</Link>
            </li>
            <li className={`menuLink ${pathname === "/info" ? "active" : null}`}>
                <Link href="/info">about me</Link>
            </li>
        </menu>
    );
}
