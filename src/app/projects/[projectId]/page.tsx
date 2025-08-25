import { Metadata } from "next";
import { fetchProjectData } from "@/utils/api";
import { Props } from "@/utils/types";

// Dynamic metadata generation
export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const projectData = await fetchProjectData((await params).projectId);

    return {
        title: projectData.title.rendered,
        description: projectData.acf.showcase.project_overview,
        robots: "index, follow",
    };
}

export default async function Project({
    params,
} : {
    params: Props;
}) {
    const projectData = await fetchProjectData((await params).projectId);

    return (
        <main className="main-layout">
            <video autoPlay className="order-2 col-span-2 rounded-md shadow-md mobile-s:row-start-2">
                <source 
                    src={projectData.acf.showcase.project_preview.url} 
                    type={projectData.acf.showcase.project_preview.mime_type}/>
            </video>
            <section className="card-coloured order-3 col-span-2 row-span-2">
                <h2 className="title">Overview</h2>
                <p className="paragraph">{projectData.acf.showcase.project_overview}</p>
            </section>
            <section className="card order-4 col-span-2">
                <h2 className="title">Tech Used</h2>
                <ul className="font-fredoka flex flex-wrap gap-2">
                    {projectData.acf.development.tools.map((tool: any) => (
                        <li key={tool.term_id} className="stack w-fit">{tool.name}</li>
                    ))}
                </ul>
            </section>
        </main>
    )

}