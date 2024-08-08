import { ProjectObject } from "@/types";
import scribblepad from "../../public/scribblePad_j0miez_c_scale,w_1024.webp";

const projects: ProjectObject[] = [
    {
        title: "My Doctor Healthcare",
        content: "A healthcare appointment management system",
        tags: ["Next.js", "React", "Appwrite", "Twillio", "Shadcn", "Typescript", "Tailwind css"],
        href: "https://www.google.com",
        image: scribblepad,
    },
    {
        title: "Scribblepad",
        content: "Your one stop shop for all your organisational needs.",
        tags: [
            "Next.js",
            "Next-auth",
            "Next-themes",
            "React",
            "React-hook-form",
            "Zod",
            "Shadcn",
            "Typescript",
            "Tailwind css",
        ],
        href: "https://scribblepad.onrender.com/",
        image: scribblepad,
    },
    {
        title: "Word up",
        content: "A simple english dictionary lookup",
        tags: [
            "React",
            "Tailwind css",
            "React-loading-skeleton",
            "Next-ui",
            "Framer motion",
            "Dictionaryapi.dev",
        ],
        href: "https://dlee1993.github.io/dictionary_app/",
        image: scribblepad,
    },
    {
        title: "Galleria",
        content: "Concept artwork gallery",
        tags: ["React", "Pure-react-carousel", "Tailwind css"],
        href: "https://dlee1993.github.io/galleria-slideshow/",
        image: scribblepad,
    },
];

export default projects;
