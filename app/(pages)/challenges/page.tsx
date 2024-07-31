import ChallengeList from "@/app/components/ChallengeList";
export default function page() {
    return (
        <section className="mt-10 max-w-5xl mx-auto">
            <article>
                <h2 className="tracking-tighter text-2xl">The Challenge library.</h2>
                <p className="text-csFadedWhite mt-2 mb-7 text-sm max-w-lg">
                    This is my library of challenges from third-party sources. The goal of this
                    library is to continuously challenge my core knowledge of Web Development.
                </p>
            </article>
            <ChallengeList />
        </section>
    );
}
