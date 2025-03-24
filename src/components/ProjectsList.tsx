import { fetchProjects } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import { Gabarito } from 'next/font/google';

const gabrito = Gabarito({
    weight: '600'
})

export default async function ProjectsList() {

    const projects = await fetchProjects();

    return (
        <section className="flex gap-4 flex-col card-coloured order-5 col-span-2">
            <h1 className={`${gabrito.className} text-2xl`}>Projects</h1>
            <ul className="flex flex-col gap-4 items-center justify-center">
                {projects.map((project: any) => (
                    <li key={project.id} className="w-[326px] h-[79px] relative p-4">
                        <Link href={`/projects/${project.id}`}>
                            <div className="absolute inset-0 bg-secondary rounded-md"></div>
                            <Image src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} fill loading="lazy" className="object-cover rounded-md opacity-60" />
                            <div className="absolute z-20">
                                <h2 className={`${gabrito.className} text-primary`}>{project.title.rendered}</h2>
                                <ul className="flex gap-2 items-center justify-center">
                                    {project.acf.development.tools.map((tools: any) => (
                                        <li key={tools.term_id} className="stack">{tools.name}</li>
                                    ))}
                                </ul>
                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}