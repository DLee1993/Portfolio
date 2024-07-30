"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Inputs, FormDataSchema } from "@/schema/FormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function ContactForm() {
    const [formSuccess, setFormSuccess] = useState<boolean>(false);
    const [formError, setFormError] = useState({ bool: false, message: "" });

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<Inputs>({
        mode: "onSubmit",
        resolver: zodResolver(FormDataSchema),
        defaultValues: {
            user_name: "",
            user_email: "",
            user_company: "",
            message: "",
        },
    });

    const processForm = () => {
        const canSave = [dirtyFields].every(Boolean);

        if (!canSave) return;

        emailjs
            .sendForm(
                `${process.env.NEXT_PUBLIC_EMAILJS_SERVID}`,
                `${process.env.NEXT_PUBLIC_EMAILJS_TEMPID}`,
                "#form",
                {
                    publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBKEY}`,
                    // limitRate: { throttle: 60000 },
                }
            )
            .then(
                () => {
                    // console.log("SUCCESS!");
                    setFormSuccess(true);
                },
                (error) => {
                    // console.log("FAILED...", error.text);
                    setFormError({ bool: true, message: "ERROR: " + error.text });
                }
            );
    };

    return (
        <section className="mt-10 sm:mt-14 md:mt-20">
            {formSuccess ? (
                <h2 className="w-full text-center">Your message has been sent.</h2>
            ) : formError.bool ? (
                `${formError.message}`
            ) : (
                <form id="form" className="w-full" onSubmit={handleSubmit(processForm)}>
                    <fieldset className="w-full flex flex-col sm:flex-row justify-between items-center gap-x-2 mb-5">
                        <fieldset>
                            <label htmlFor="name">Full name</label>
                            <input
                                id="name"
                                placeholder={
                                    errors?.user_name
                                        ? `${errors?.user_name?.message}`
                                        : "Enter your name *"
                                }
                                className={`${
                                    errors.user_name
                                        ? "placeholder:text-csRed"
                                        : "placeholder:text-csFadedWhite"
                                }`}
                                autoComplete="true"
                                {...register("user_name")}
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="email">Full email</label>
                            <input
                                id="email"
                                placeholder={
                                    errors?.user_email
                                        ? `${errors?.user_email?.message}`
                                        : "Enter your email address *"
                                }
                                className={errors.user_email && "placeholder:text-csRed"}
                                autoComplete="true"
                                {...register("user_email")}
                            />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="company">Company Name</label>
                            <input
                                id="company"
                                placeholder={
                                    errors?.user_company
                                        ? `${errors?.user_company?.message}`
                                        : "Enter your company name *"
                                }
                                className={errors.user_company && "placeholder:text-csRed"}
                                {...register("user_company")}
                            />
                        </fieldset>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder={
                                errors?.message
                                    ? `${errors?.message?.message}`
                                    : "What would you like to say? *"
                            }
                            className={errors.message && "placeholder:text-csRed"}
                            {...register("message")}
                        />
                    </fieldset>

                    <button
                        className="text-sm mt-10 py-2 px-4 w-fit bg-white text-csBlack rounded-full border-2 border-csWhite hover:bg-csBlack hover:text-csWhite transition-colors"
                        type="submit"
                    >
                        Send message
                    </button>
                </form>
            )}
        </section>
    );
}
