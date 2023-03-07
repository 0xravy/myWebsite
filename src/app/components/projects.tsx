import Image from "next/image";

const Projects = ({ id }: any) => {
    return (
        <div
            id={id}
            className="w-full h-screen bg-gray-200 flex justify-center items-center"
        >
            <div className="w-[90%] h-[80%] bg-primary shadow-lg shadow-indigo-500/40 flex justify-center items-center flex-wrap gap-20 overflow-y-scroll overflow-x-hidden px-5 py-10">
                <div className="card">
                    <Image alt="lala" src="/card1.gif" width="10" height="10" />
                    <div className="info">
                        <h1>Card</h1>
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                        <button>GIT</button>
                    </div>
                </div>

                <div className="card">
                    <Image alt="lala" src="/card2.gif" width="10" height="10" />
                    <div className="info">
                        <h1>Card</h1>
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                        <button>GIT</button>
                    </div>
                </div>

                <div className="card">
                    <Image alt="lala" src="/card3.gif" width="10" height="10" />
                    <div className="info">
                        <h1>Card</h1>
                        <p>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </p>
                        <button>GIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
