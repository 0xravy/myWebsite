import Image from "next/image";

const Projects = ({ id }: any) => {
    return (
        <div
            id={id}
            className="w-full min-h-screen bg-lala flex justify-center items-center py-20"
        >
            <div className="w-[85%] min-h-[70%] bg-primary border-solid rounded-xl shadow-lg flex flex-col justify-center items-center gap-20 px-5 pb-16 lg:p-20">
                <Card
                    imgSrc="/card1.gif"
                    title="myFirst projects"
                    content="Hello World!"
                    btn="git"
                />
                <Card
                    imgSrc="/card2.gif"
                    title="myFirst projects"
                    content="Hello World!"
                    btn="git"
                />
                <Card
                    imgSrc="/card3.gif"
                    title="myFirst projects"
                    content="Hello World!"
                    btn="git"
                />
                <Card
                    imgSrc="/ava.gif"
                    title="myFirst projects"
                    content="Hello World!"
                    btn="git"
                />
                <Card
                    imgSrc="/next.svg"
                    title="myFirst projects"
                    content="Hello World!"
                    btn="git"
                />
            </div>
        </div>
    );
};

const Card = ({ imgSrc, title, content, btn }: any): any => {
    return (
        <div className="w-[90%] max-w-[45rem] h-96 lg:h-48 flex flex-wrap gap-10 justify-center my-10 lg:my-0">
            <Image className="h-48 w-48 object-cover p-3 lg:p-5 border-gray-400 border-4" alt="lala" src={imgSrc} width="10" height="10" />
            <div className="w-full lg:w-[65%] h-56 sm:h-48 shd text-gray-200 p-3 flex flex-col justify-between">
                <div>
                    <h1 className="text-[1.2rem] sm:text-2xl px-2">{title}</h1>
                    <p className="w-full h-full p-5 text-gray-300">{content}</p>
                </div>
                <div className="relative h-14 w-full flex items-center">
                    <button className="px-7 py-2 border-white border-2 hover:bg-white hover:text-lala text-[1.2rem] absolute right-0">{btn}</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
