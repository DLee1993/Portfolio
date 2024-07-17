"use client";

import { useParams } from "next/navigation";
export default function Page() {
    const { project } = useParams();

    return (
        <section>
            <p>{project}</p>
        </section>
    );
}
