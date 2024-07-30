import { StaticImageData } from "next/image";

type ProjectObject = {
    title: string;
    content: string;
    tags: string[];
    href: string;
    image: StaticImageData;
};

type ChallengeObject = {
    title: string;
    href: string;
    repo: string;
    category: string;
};
