import projects from "@/app/content/projects";

export default async function page() {
    return (
        <section>
            {projects.map((element: ProjectObject, index: number) => (
                <section key={index}>
                    <p>{element.title}</p>
                    <p>{element.content}</p>
                </section>
            ))}
        </section>
    );
}
