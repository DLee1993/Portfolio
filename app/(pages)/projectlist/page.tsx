import projectList from "@/app/data.json";

export default async function page() {
    return (
        <section>
            {projectList.map((element, index: number) => (
                <section key={index}>
                    <p>{element.title}</p>
                    <p>{element.content}</p>
                </section>
            ))}
        </section>
    );
}
