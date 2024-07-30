import ContactForm from "@/app/components/ContactForm";
export default function page() {
    return (
        <section>
            <article className="max-w-lg mx-auto text-center">
                <h2 className="text-2xl lg:text-3xl font-semibold">Let&apos;s work together.</h2>
                <p className="text-csFadedWhite mt-2 mb-7 text-sm">
                    If you would like to discuss my portfolio further or discuss potential
                    employment, please complete the form below.
                </p>
            </article>
            <ContactForm />
        </section>
    );
}
