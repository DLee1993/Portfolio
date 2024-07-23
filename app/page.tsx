"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function Page() {
    const container = useRef(null);

    // useGSAP(
    //     () => {
    //         gsap.to("span", { opacity: 1 });
    //     },
    //     { scope: container }
    // );

    return (
        <section ref={container} className="flex justify-center items-center min-h-[45vh]">
            <h1 className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl flex flex-col justify-center items-center md:items-end gap-y-4">
                <span className="tracking-tighter text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
                    I build accessible, modern web apps to help streamline the needs of people and
                    businesses.
                </span>
                <span className="text-csFadedWhite text-xs">
                    Frontend Developer base in South Wales, UK.
                </span>
            </h1>
        </section>
    );
}
