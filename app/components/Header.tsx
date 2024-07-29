import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Header() {
    return (
        <header className="min-h-28 w-full sticky top-0 z-50 flex justify-between items-center customPadding bg-gradient-to-b from-csBlack via-csBlack/50 to-transparent">
            <div>
                <p className="text-xl font-semibold leading-none">David Lee</p>
                <p className="text-xs text-csFadedWhite">Frontend Developer</p>
            </div>
            <ul className="flex justify-center items-center gap-x-5 capitalize text-sm">
                <li className="group">
                    <Link href="#" className="hidden sm:flex justify-center items-center gap-x-1">
                        resume{" "}
                        <ImArrowUpRight2
                            size="0.75rem"
                            className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                        />
                    </Link>
                </li>
                <li className="group">
                    <Link href="#" className="hidden sm:flex justify-center items-center gap-x-1">
                        github{" "}
                        <ImArrowUpRight2
                            size="0.75rem"
                            className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                        />
                    </Link>
                </li>
                <li className="group">
                    <Link href="#" className="flex justify-center items-center gap-x-1">
                        contact{" "}
                        <ImArrowUpRight2
                            size="0.75rem"
                            className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
