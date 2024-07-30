"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import challenges from "../content/challenges";
import { ImArrowUpRight2 } from "react-icons/im";
import { ChallengeObject } from "@/types";
import { motion } from "framer-motion";

export default function ChallengeList() {
    const [challengesArray, setChallengesArray] = useState<ChallengeObject[]>([]);
    const [filterSelected, setFilterSelected] = useState("all");
    const filters = ["all", "landing page", "component"];

    useEffect(() => {
        if (filterSelected === "all") {
            setChallengesArray(challenges);
        }

        if (filterSelected !== "all") {
            const dataFilter = challenges.filter(
                (dataPoint) => dataPoint.category.toLowerCase() === filterSelected
            );
            setChallengesArray(dataFilter);
        }
    }, [filterSelected]);

    const setSelected = (selected: string) => {
        setFilterSelected(selected);
    };

    return (
        <section className="my-10">
            <section className="mt-20 mb-1">
                <ul className="flex justify-evenly sm:justify-start items-center gap-x-2 py-2 px-1 bg-csWhite/5 border-2 border-csWhite/5 backdrop-blur-md rounded-md">
                    {filters.map((filter, index) => (
                        <li
                            onClick={() => setSelected(filter)}
                            key={index}
                            tabIndex={1}
                            className="relative text-sm w-fit cursor-pointer grid place-items-center rounded-md hover:bg-csWhite/10 transition-colors capitalize"
                        >
                            {filterSelected === filter && (
                                <motion.div
                                    layoutId="active-filter"
                                    style={{ originY: "0px" }}
                                    className="absolute w-full h-full bg-white text-csBlack rounded-md -z-50"
                                ></motion.div>
                            )}
                            <p className={`${filterSelected === filter && "text-csBlack"} py-1 px-3`}>
                                {filter}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            <ul id="challengeList" className="max-h-96 overflow-y-scroll">
                {challengesArray.map((challenge, index) => (
                    <li
                        key={`challenge-${index}`}
                        className="text-sm flex justify-between items-center border-t-[1px] border-csFadedWhite/15 py-4 px-2 hover:bg-csWhite/5"
                    >
                        <div className="w-fit flex justify-center items-center gap-x-2">
                            <p className="text-csFadedWhite text-sm">
                                {index < 9 ? `0${index + 1}` : `${index + 1}`}
                            </p>
                            <h3>{challenge.title}</h3>
                        </div>
                        <div className="w-fit flex justify-center items-center gap-x-6">
                            <Link
                                href={challenge.href}
                                className="flex justify-center items-center gap-x-1 group"
                            >
                                Live{" "}
                                <ImArrowUpRight2
                                    size="0.75rem"
                                    className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                                />
                            </Link>
                            <Link
                                href={challenge.repo}
                                className="flex justify-center items-center gap-x-1 group"
                            >
                                Repo{" "}
                                <ImArrowUpRight2
                                    size="0.75rem"
                                    className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-all"
                                />
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
