import { Metadata } from "next";
import { fetchProjectData } from "@/utils/api";
import Header from "@/components/Header";
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
        <main className="mobile-layout">
            {Header(projectData.title.rendered)}
            <video autoPlay className="order-2 col-span-2 rounded-md shadow-md">
                <source 
                    src={projectData.acf.showcase.project_preview.url} 
                    type={projectData.acf.showcase.project_preview.mime_type}/>
            </video>
            <section className="card order-3 col-span-2 row-span-2">
                <h2 className="title">Overview</h2>
                <p className="paragraph">{projectData.acf.showcase.project_overview}</p>
            </section>
        </main>
    )

}