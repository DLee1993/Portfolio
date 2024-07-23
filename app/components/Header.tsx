import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Header() {
    return (
        <header className="min-h-28 w-full sticky top-0 z-50 flex justify-between items-center">
            <div>
                <p className="text-xl font-semibold leading-none">David Lee</p>
                <p className="text-xs text-csFadedWhite leading-none">Frontend Developer</p>
            </div>
            <ul className="flex justify-center items-center gap-x-5 capitalize text-sm">
                <li className="flex justify-center items-center gap-x-1 group">
                    <Link href="#">linkedin</Link>
                    <ImArrowUpRight2
                        size="0.75rem"
                        className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                    />
                </li>
                <li className="flex justify-center items-center gap-x-1 group">
                    <Link href="#">github</Link>
                    <ImArrowUpRight2
                        size="0.75rem"
                        className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                    />
                </li>
            </ul>
        </header>
    );
}
