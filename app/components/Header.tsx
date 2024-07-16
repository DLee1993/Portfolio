import logo from "../../public/next.svg";
import Image from "next/image";
function Header() {
    return (
        <header>
            <Image src={logo} alt="" />
            <h1>developer / kickboxer</h1>
        </header>
    );
}
export default Header;
