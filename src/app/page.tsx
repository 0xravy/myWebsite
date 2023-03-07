import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "./components/Home";
import Projects from "./components/projects";
import Links from "./components/links";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
    return (
        <main className="bg-primary w-full h-full">
            <Home id="home" />
            <Projects id="projects" />
            <Links id="links" />
        </main>
    );
}
