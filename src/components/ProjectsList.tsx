import { fetchProjects } from "@/utils/api";
import Link from "next/link";

export default async function ProjectsList() {

    const projects = await fetchProjects();

    return (
        <section className="card-coloured">
            <h1>Projects</h1>
            <ul>
                {projects.map((project: any) => (
                    <li key={project.id}>
                        <Link href={`/projects/${project.id}`}>
                            <h2>{project.title.rendered}</h2>
                            <img src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}