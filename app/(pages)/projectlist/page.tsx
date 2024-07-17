import { promises as fs } from "fs";

type DataObject = {
    title: string;
    content: number;
};

export default async function page() {
    const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
    const data = JSON.parse(file);

    return (
        <section>
            {data.map((element: DataObject, index: number) => (
                <section key={index}>
                    <p>{element.title}</p>
                    <p>{element.content}</p>
                </section>
            ))}
        </section>
    );
}
