import { fetchProjects } from "@/utils/api";
import Link from "next/link";

export default async function Projects() {
    const projects = await fetchProjects();

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project: any) => (
                    <li key={project.id}>
                        <Link href={`/projects/${project.title.rendered}`}>
                            <h2>{project.title.rendered}</h2>
                            <img src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} />
                        </Link>
                        {/* <div dangerouslySetInnerHTML={{__html: project.content.rendered}} /> */} 
                    </li>
                ))}
            </ul>
        </div>
    );
}