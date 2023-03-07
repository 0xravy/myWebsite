import Navbar from "./navbar";
import Image from "next/image";
const Home = ({ id }: any) => {
    return (
        <div
            id={id}
            className="w-full h-screen bg-primary flex justify-center items-center "
        >
            <Navbar />
            <div className="bg-lala w-[80%] sm:w-[40rem] h-[55%] sm:h-[40rem] rounded-3xl shadow-2xl flex items-center justify-center flex-col relative translate-y-10 sm:translate-y-24">
                <Image
                    className="object-cover w-[60%] sm:w-96 rounded-full shadow-lg absolute top-0 -translate-y-1/2"
                    src="/ava.gif"
                    alt="lala"
                    width="10"
                    height="10"
                />
                <div className="bg-lolo w-[90%] sm:w-[35rem] h-[70%] sm:h-[24rem] translate-y-10 sm:translate-y-20 rounded-2xl p-6 font-">
                    <p className="text-white text-[.55rem] sm:text-sm">
                        <span className="text-blue-500">const&nbsp;</span>
                        <span>about = {"{"}</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>name:&nbsp;</span>
                        <span className="text-green-500">"aravan"</span>,<br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>age:&nbsp;</span>
                        <span className="text-red-500">18</span>,<br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>libary: =&nbsp;</span>
                        <span>{"["}</span>
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="text-green-500">"next.js"</span>,
                        <span className="text-green-500">"tailwindcss"</span>,
                        <span className="text-green-500">"react.js"</span>,
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="text-green-500">"discord.js"</span>,
                        <span className="text-green-500">"express"</span>,
                        <span className="text-green-500">"three.js"</span>,
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>{"]"}</span>
                        <br />
                        <span>{"}"}</span>
                        <br />
                        <span className="text-[#716666]">
                            <br />
                            {"/*"}
                            <br />
                            &nbsp;{"* I have 3+ years on programming"}
                            <br />
                            &nbsp;{"* i am Fullstack Developer"}
                            <br />
                            &nbsp;{"*"}
                            <br />
                            &nbsp;{"**/"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
