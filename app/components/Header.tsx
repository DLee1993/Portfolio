import logo from "../../public/faviconPNG.png";
import Image from "next/image";
import Link from "next/link";
function Header() {
    return (
        <header className="py-5 sm:py-10 px-5 sm:px-10">
            <Link href="/" className="flex justify-start items-center gap-x-4">
                <Image src={logo} alt="personal logo" className="rounded-full size-6" />
                <h1 className="uppercase font-inter text-small">developer / kickboxer</h1>
            </Link>
        </header>
    );
}
export default Header;
