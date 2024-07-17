import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="p-5 flex justify-between items-center text-small sm:text-base">
            <ul className="flex gap-4">
                <li>
                    <Link href="#">tw</Link>
                </li>
                <li>
                    <Link href="#">gh</Link>
                </li>
                <li>
                    <Link href="#">dc</Link>
                </li>
                <li>
                    <Link href="#">fm</Link>
                </li>
            </ul>
            <p className="w-fit flex justify-center items-center gap-x-2">
                <FaRegCopyright />
                2024
            </p>
        </footer>
    );
}
export default Footer;
