// "use client";

import Image from "next/image";
import scribblepad from "@/public/scribblePad.webp";
import Link from "next/link";
// import { inView, animate } from "framer-motion";
// import { useEffect } from "react";

function Showcase() {
    // useEffect(() => {
    //     const articles = document.querySelectorAll("article");

    //     articles.forEach((article) => {
    //         inView(
    //             article,
    //             () => {
    //                 const link = article.querySelector("a") as HTMLAnchorElement;

    //                 animate(link, { scale: 1 });

    //                 return () => animate(link, { scale: 0 });
    //             },
    //             { amount: "all" }
    //         );
    //     });
    // });

    return (
        <section className="px-5">
            <p className="text-right text-small sm:text-base mb-3">Featured work</p>

            <section className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-1">
                <article
                    id="showcaseProject"
                    className="col-span-2 relative overflow-hidden w-full h-96 group rounded-t-lg"
                >
                    <figure>
                        <Image
                            src={scribblepad}
                            alt="ai generated image of notepad and pen"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                    </figure>
                    <Link
                        href="#"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-40 h-40 backdrop-blur-md rounded-full bg-white/50 text-csBlack scale-0 group-hover:scale-100 transition-transform"
                    >
                        view project
                    </Link>
                </article>
                <article
                    id="showcaseProject"
                    className="row-start-2 relative overflow-hidden w-full h-96 group"
                >
                    <figure>
                        <Image
                            src={scribblepad}
                            alt="ai generated image of notepad and pen"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            sizes="(max-width: 640px) 100vw, (max-width: 641px) 50vw, 50vw"
                        />
                    </figure>
                    <Link
                        href="#"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-40 h-40 backdrop-blur-md rounded-full bg-white/50 text-csBlack scale-0 group-hover:scale-100 transition-transform"
                    >
                        view project
                    </Link>
                </article>
                <article
                    id="showcaseProject"
                    className="row-start-3 sm:row-start-2 relative overflow-hidden w-full h-96 group"
                >
                    <figure>
                        <Image
                            src={scribblepad}
                            alt="ai generated image of notepad and pen"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            sizes="(max-width: 640px) 100vw, (max-width: 641px) 50vw, 50vw"
                        />
                    </figure>
                    <Link
                        href="#"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-40 h-40 backdrop-blur-md rounded-full bg-white/50 text-csBlack scale-0 group-hover:scale-100 transition-transform"
                    >
                        view project
                    </Link>
                </article>
                <article
                    id="showcaseProject"
                    className="col-span-2 relative overflow-hidden w-full h-96 group rounded-b-lg"
                >
                    <figure>
                        <Image
                            src={scribblepad}
                            alt="ai generated image of notepad and pen"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                    </figure>
                    <Link
                        href="#"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-40 h-40 backdrop-blur-md rounded-full bg-white/50 text-csBlack scale-0 group-hover:scale-100 transition-transform"
                    >
                        view project
                    </Link>
                </article>
            </section>
        </section>
    );
}
export default Showcase;
