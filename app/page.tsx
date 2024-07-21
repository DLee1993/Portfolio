"use client";
export default function Page() {
    const list = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <section>
            <p>content that changes</p>
            <p>content that changes</p>
        </section>
    );
}
