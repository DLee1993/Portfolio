import logo from "../../public/faviconPNG.png";
import Image from "next/image";
function Header() {
    return (
        <header className="flex justify-start items-center py-5 sm:py-10 gap-x-4 px-5 sm:px-10">
            <Image src={logo} alt="personal logo" className="rounded-full size-6" />
            <h1 className="uppercase font-inter text-small">
                developer / kickboxer
            </h1>
        </header>
    );
}
export default Header;
