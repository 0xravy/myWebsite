import Image from "next/image";

const Navbar = () => {
    return (
        <header className="w-full sm:w-16 h-16 sm:h-screen absolute top-0 flex-col left-0">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="bg-secondary sm:w-2 h-2 sm:h-[30%] absolute top top-10"></div>
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
                <div className="bg-secondary w=[30%] sm:w-2 h-2 sm:h-[30%] absolute bottom-10"></div>
            </div>
        </header>
    );
};

export default Navbar;

