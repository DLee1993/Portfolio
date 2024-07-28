"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Footer() {
    const pathname = usePathname();

    const socials = [
        {
            href: "https://www.google.com",
            textContent: "github",
        },
        {
            href: "https://www.google.com",
            textContent: "discord",
        },
        {
            href: "https://www.google.com",
            textContent: "frontend mentor",
        },
    ];
    return (
        <footer className="min-h-[50vh] customPadding text-sm pt-10 pb-24 md:py-20 border-t-2 border-csFadedWhite/10 mt-20">
            <section className="w-full flex flex-col gap-y-10 md:flex-row justify-around items-start">
                <article className="max-w-md flex flex-col">
                    {pathname !== "/contact" ? (
                        <>
                            <h2 className="text-lg font-semibold">
                                Thanks for checking out my portfolio
                            </h2>
                            <p className="text-csFadedWhite mt-2 mb-7">
                                If you would like to discuss my portfolio further or discuss
                                potential employment, please click the button below to get in touch
                            </p>
                            <Link
                                href="/contact"
                                className="py-2 px-4 w-fit bg-white text-csBlack rounded-full border-2 border-csWhite hover:bg-csBlack hover:text-csWhite transition-colors"
                            >
                                Get in touch
                            </Link>
                        </>
                    ) : (
                        <>
                            <h2 className="text-lg font-semibold">
                                Thanks for checking out my portfolio
                            </h2>
                            <p className="text-csFadedWhite mt-2 mb-7">
                                If you would like to download my resume for your personal records,
                                please click the link below, I look forward to hearing from you.
                            </p>
                            <Link
                                href="/contact"
                                className="py-2 px-4 w-fit bg-white text-csBlack rounded-full border-2 border-csWhite hover:bg-csBlack hover:text-csWhite transition-colors"
                            >
                                Download Resume
                            </Link>
                        </>
                    )}
                </article>
                <ul className="capitalize flex flex-col gap-y-2">
                    <li className="text-csFadedWhite mb-3">Digital connections</li>
                    {socials.map((socialLink, index) => (
                        <li className="group w-fit" key={index}>
                            <Link
                                href={socialLink.href}
                                target="_blank"
                                className="flex justify-start items-center gap-x-1"
                            >
                                {socialLink.textContent}
                                <ImArrowUpRight2
                                    size="0.75rem"
                                    className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
}
