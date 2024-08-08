"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Page() {
    const [tab, setTab] = useState<number>(1);

    const updateTabs = (id: number) => {
        setTab(id);
    };

    const ResumeDetails = [
        {
            title: "Name",
            content: "David Lee",
        },
        {
            title: "position",
            content: "Frontend Developer",
        },
        {
            title: "about me",
            content:
                "Detail-oriented and motivated developer who creates responsive modern websites. Eager to learn in a fast-paced setting for professional and personal development. I'm looking for an opportunity to push myself and improve my ability to produce high-quality, robust solutions.",
        },
        {
            title: "experience",
            content: "view projects",
        },
        {
            title: "tech stack",
            content: [
                "Next.js",
                "React",
                "Express",
                "MongoDB",
                "Tailwind css",
                "React aria",
                "Shadcn-ui",
                "Mantine ui",
            ],
        },
        {
            title: "languages",
            content: ["HTML", "CSS", "Javascript"],
        },
        {
            title: "tools",
            content: ["Typescript", "Github", "Node js", "Npm", "Postman", "Figma"],
        },
    ] as const;

    return (
        <section className="relative flex flex-col md:flex-row gap-y-4 md:gap-x-10">
            <aside className="border-b-2 md:border-none border-csFadedWhite/10 py-4 min-w-36">
                <h3 className="text-csFadedWhite hidden md:block text-sm">Index</h3>
                <ul className="mt-5 flex flex-row md:flex-col gap-x-4 md:gap-y-2">
                    <li
                        onClick={() => updateTabs(1)}
                        className={`cursor-pointer w-fit ${
                            tab === 1 ? "text-csWhite" : "text-csFadedWhite/35"
                        }`}
                    >
                        Personal Bio
                    </li>
                    <li
                        onClick={() => updateTabs(2)}
                        className={`cursor-pointer w-fit ${
                            tab === 2 ? "text-csWhite" : "text-csFadedWhite/35"
                        }`}
                    >
                        Resume
                    </li>
                </ul>
            </aside>
            <section id="content container" className="w-full">
                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: tab === 1 ? 1 : 0, y: tab === 1 ? 0 : 10 }}
                    id="biography"
                    className={tab === 1 ? "block" : "hidden"}
                >
                    <article className="md:w-4/5 md:mx-auto">
                        <h3 className="w-full text-xl md:text-2xl tracking-tight font-semibold">
                            I am passionate about building pixel-perfect, engaging, and accessible
                            digital experiences.
                        </h3>
                        <p className="mt-10 text-csWhite/75">
                            I&apos;ve always been interested in technology and have dabbled in
                            website development, but I never had the confidence to pursue it as a
                            job until I was 30. I felt it was now or never, so I started researching
                            what I needed to learn as a community-taught developer to launch my new
                            profession as a Frontend Developer. Over the last year, I&apos;ve been
                            expanding my knowledge and understanding of the key technologies in web
                            development. Having a deeper understanding of the these technologies has
                            helped me to integrate and use the current technologies more
                            efficiently. The current technologies I use to build are React, NextJs,
                            Tailwind CSS, ShadcnUI, and Typescript.
                        </p>
                        <br />
                        <p className="text-csWhite/75">
                            As of today, I am simply developing, whether it is typesafe components
                            or entire web applications. The pursuit of pixel-perfect, easily
                            accessible digital experiences continues.
                        </p>
                    </article>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: tab === 2 ? 1 : 0, y: tab === 2 ? 0 : 10 }}
                    id="resume"
                    className={tab === 2 ? "block" : "hidden"}
                >
                    <article className="md:w-4/5 md:mx-auto">
                        <h3 className="w-full text-xl md:text-2xl tracking-tight font-semibold">
                            Resume
                        </h3>
                        <section className="mt-10 flex flex-col gap-y-10">
                            {ResumeDetails.map((detail, index) => (
                                <article
                                    key={index}
                                    className="flex flex-wrap justify-start items-start"
                                >
                                    <h4 className="w-1/5 text-csFadedWhite capitalize">
                                        {detail.title}
                                    </h4>
                                    {detail.title === "experience" ? (
                                        <Link
                                            href="https://github.com/DLee1993"
                                            target="_blank"
                                            className="underline"
                                        >
                                            view all
                                        </Link>
                                    ) : detail.title === "tech stack" ||
                                      detail.title === "languages" ||
                                      detail.title === "tools" ? (
                                        <ul className="space-y-2">
                                            {detail.content.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="w-4/5">{detail.content}</p>
                                    )}
                                </article>
                            ))}
                        </section>
                    </article>
                </motion.section>
            </section>
        </section>
    );
}
