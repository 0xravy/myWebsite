import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <header className="fixed w-full sm:w-16 h-16 sm:h-screen z-50 top-0 flex-col left-0">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <span className="navbar-span top-24">
                    <BsFillLightningChargeFill
                        className="w-10 h-10 text-yellow-300 absolute top-0 translate-y-[-140%]"
                        size="30"
                    />
                </span>
                <ul className="flex sm:flex-col gap-8">
                    <a
                        href="#home"
                        className="relative flex justify-center items-center group"
                    >
                        <Image
                            alt="lala"
                            width="10"
                            height="10"
                            src="/s1.svg"
                            className="w-12 h-12"
                        />
                        <h1 className="navbar-item">💡Home</h1>
                    </a>
                    <a
                        href="#projects"
                        className="relative flex justify-center items-center group"
                    >
                        <Image
                            alt="lala"
                            width="10"
                            height="10"
                            src="/s2.svg"
                            className="w-12 h-12"
                        />
                        <h1 className="navbar-item translate-x-201">
                            💡Projects
                        </h1>
                    </a>
                    <a
                        href="#links"
                        className="relative flex justify-center items-center group"
                    >
                        <Image
                            alt="lala"
                            width="10"
                            height="10"
                            src="/s3.svg"
                            className="w-12 h-12"
                        />
                        <h1 className="navbar-item">💡Links</h1>
                    </a>
                </ul>
                <span className="navbar-span bottom-24">
                    <BsFillLightningChargeFill
                        className="w-10 h-10 text-yellow-300 absolute bottom-0 translate-y-[140%]"
                        size="30"
                    />
                </span>
            </div>
        </header>
    );
};

export default Navbar;
