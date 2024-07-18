import { promises as fs } from "fs";

type ProjectObject = {
    title: string;
    content: string;
};

export default async function page() {
    const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
    const data = JSON.parse(file);
    return (
        <section>
            {data.map((element: ProjectObject, index: number) => (
                <section key={index}>
                    <p>{element.title}</p>
                    <p>{element.content}</p>
                </section>
            ))}
        </section>
    );
}
