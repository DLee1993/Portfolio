import Showcase from "./components/Showcase";
export default function page() {
    return (
        <section>
            <section className="flex justify-start items-end sm:items-center text-small sm:text-base py-5 px-5 md:pl-40 lg:pl-52 min-h-60">
                <article>
                    <p className="mb-5">
                        Hi I&apos;m David, a Frontend Developer based in{" "}
                        <span className="text-csGrey"> South Wales, UK.</span>
                    </p>
                    <p className="max-w-md">
                        I enjoy building accessible, modern web apps to help streamline the needs of
                        people and businesses
                    </p>
                </article>
            </section>
            <Showcase />
        </section>
    );
}
