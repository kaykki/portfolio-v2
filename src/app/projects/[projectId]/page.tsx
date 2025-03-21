import { Metadata } from "next";
import { fetchProjectData } from "@/utils/api";
import Header from "@/components/Header";
import { Props } from "@/utils/types";

// Dynamic metadata generation
export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const projectData = await fetchProjectData((await params).projectId);

    console.log(projectData);
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
        <>{Header(projectData.title.rendered)}</>
    )

}