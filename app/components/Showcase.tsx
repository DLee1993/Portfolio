import Image from "next/image";
import projects from "../content/projects";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

export default function Showcase() {
    return (
        <ul className="space-y-10 md:space-y-20">
            {projects.map((project, index) => (
                <li key={`project-${0 + index}`} className="w-full md:w-11/12 max-w-4xl mx-auto group">
                    <Link
                        href={project.href}
                        target="_blank"
                        id="project"
                        className="relative block p-2 rounded-xl md:rounded-3xl bg-csWhite/5 overflow-hidden"
                        aria-label={`This is a link to the personal project ${project.title}`}
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-radial from-csWhite/60 via-csBlack/10 to-transparent"></div>
                        <section
                            className={`relative bg-csBlack/40 transition-colors duration-500 pt-10 pb-1 px-2 rounded-xl md:rounded-3xl overflow-hidden`}
                        >
                            <div
                                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${
                                    index === 0
                                        ? "from-csGreen/75"
                                        : index === 1
                                        ? "from-csPurple/50"
                                        : index === 2
                                        ? "from-csBlue/75"
                                        : index === 3
                                        ? "from-csRed/30"
                                        : "from-csOrange/50"
                                } to-csBlack/10 md:border-[1px] border-csWhite rounded-xl md:rounded-3xl md:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500`}
                            ></div>
                            <section className="relative z-50 flex justify-between items-start mb-10 px-2 sm:px-5 md:px-10">
                                <article>
                                    <h2 className="text-2xl font-semibold tracking-tighter">
                                        {project.title}
                                    </h2>
                                    <p className="text-base text-csFadedWhite tracking-tighter mb-4">
                                        {project.content}
                                    </p>
                                    <ul className="flex flex-wrap gap-x-4 text-sm tracking-tighter">
                                        {project.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                </article>
                                <span>
                                    <LuExternalLink size="1.2rem" />
                                </span>
                            </section>
                            <figure className="relative min-h-[450px] w-full md:w-11/12 mx-auto rounded-t-lg md:rounded-t-xl overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt="project image"
                                    fill={true}
                                    objectFit="cover"
                                    className="group-hover:scale-105 group-focus-visible:scale-105 transition-all duration-500"
                                />
                            </figure>
                        </section>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
