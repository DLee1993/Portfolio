"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function FloatingNav() {
    const pathname = usePathname();
    return (
        <nav className="fixed z-50 bottom-3 left-1/2 -translate-x-1/2 bg-csBlack p-2 rounded-full">
            <ul className="flex">
                <li className={`${pathname === "/" ? "active" : ""} px-4`}>
                    <Link href="/">Index</Link>
                </li>
                <li className={`${pathname === "/projectlist" ? "active" : ""} px-4`}>
                    <Link href="/projectlist">Projects</Link>
                </li>
                <li className={`${pathname === "/aboutthedev" ? "active" : ""} px-4`}>
                    <Link href="/aboutthedev">About</Link>
                </li>
                <li className="px-4">
                    <button>Contact</button>
                </li>
            </ul>
        </nav>
    );
}
export default FloatingNav;
