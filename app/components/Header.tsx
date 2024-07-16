import logo from "../../public/faviconPNG.png";
import Image from "next/image";
function Header() {
    return (
        <header className="flex justify-start items-center py-10 gap-x-4">
            <Image src={logo} alt="personal logo" className="hidden sm:block" />
            <h1 className="uppercase font-inter">developer / kickboxer</h1>
        </header>
    );
}
export default Header;
