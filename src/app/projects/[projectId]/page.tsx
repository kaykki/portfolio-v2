import { fetchProjectData } from "@/utils/api";
import Header from "@/components/Header";

export default async function Project({
    params,
} : {
    params: Promise<{ projectId: string }>;
}) {
    const projectData = await fetchProjectData((await params).projectId);

    return <>{Header(projectData.title.rendered)}</>

}