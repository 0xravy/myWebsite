import Image from "next/image";

const Links = ({ id }: any) => {
    return (
        <div id={id} className="w-full h-screen bg-primary">
            <div className="w-full h-full flex justify-center flex-wrap items-center gap-10 py-20">
                <a
                    target="_blank"
                    href="https://discord.gg/jEJWzn2dXv"
                    className="group links bg-[#46519C]"
                >
                    <Image
                        className="links-img"
                        src="/discord.svg"
                        alt="lala"
                        width="10"
                        height="10"
                    />
                    <div className="links-hover">
                        <h1>Discord</h1>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/aravns"
                    className="group links bg-[#101215]"
                >
                    <Image
                        className="links-img"
                        src="/github.svg"
                        alt="lala"
                        width="10"
                        height="10"
                    />
                    <div className="links-hover">
                        <h1>Github</h1>
                    </div>
                </a>
                <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCRYDSKNGfj5ZA9d-nVjYeDQ"
                    className="group links bg-[#592B2F]"
                >
                    <Image
                        className="links-img"
                        src="/youtube.svg"
                        alt="lala"
                        width="10"
                        height="10"
                    />
                    <div className="links-hover">
                        <h1>Youtube</h1>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Links;
