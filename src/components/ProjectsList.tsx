import { fetchProjects } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectsList() {

    const projects = await fetchProjects();

    return (
        <section className="card-coloured order-5 col-span-2">
            <h1>Projects</h1>
            <ul>
                {projects.map((project: any) => (
                    <li key={project.id}>
                        <Link href={`/projects/${project.id}`}>
                            <h2>{project.title.rendered}</h2>
                            <Image src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} width={326} height={79} loading="lazy"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}