"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
import ChallengeList from "@/app/components/ChallengeList";
export default function Page() {
    const challengesContainer = useRef(null);

    useGSAP(
        () => {
            gsap.to("section", { opacity: 1, y: 0, stagger: 0.05 });
        },
        { scope: challengesContainer }
    );

    return (
        <section ref={challengesContainer} className="mt-10 max-w-5xl mx-auto">
            <section className="opacity-0 translate-y-10">
                <article>
                    <h2 className="tracking-tighter text-2xl">The Challenge library.</h2>
                    <p className="text-csFadedWhite mt-2 mb-7 text-sm max-w-lg">
                        This is my library of challenges from third-party sources. The goal of this
                        library is to continuously challenge my core knowledge of Web Development.
                    </p>
                </article>
                <ChallengeList />
            </section>
        </section>
    );
}
