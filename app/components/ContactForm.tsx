"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
    const [menuState, setMenuState] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuState(!menuState);
    };

    return (
        <>
            <button
                id="toggleMenuButton"
                className="py-2 px-4 bg-white text-csBlack rounded-full mt-10 border-2 border-csWhite hover:bg-csBlack hover:text-csWhite transition-colors"
                onClick={toggleMenu}
            >
                Get in touch
            </button>
            <section
                id="contactForm"
                className={`bg-csBlack/65 backdrop-blur-md fixed bottom-0 left-0 z-50 w-full h-[75vh] border-t-2 border-csFadedWhite rounded-t-md ${
                    menuState ? "translate-y-0" : "translate-y-full"
                } transition-transform duration-500`}
            >
                <div className="w-full text-right p-2">
                    <button onClick={toggleMenu} className="p-2 text-xl font-light">
                        X
                    </button>
                </div>
                contact form
            </section>
        </>
    );
}
