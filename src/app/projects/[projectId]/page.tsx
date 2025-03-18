export default async function Project({
    params,
} : {
    params: Promise<{ projectId: string }>;
}) {
    const projectId = (await params).projectId;

    return <h1>Project {projectId}</h1>;

}