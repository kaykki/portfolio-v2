import { fetchProjects } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import { Gabarito } from 'next/font/google';
import { Fredoka } from 'next/font/google';

const gabrito = Gabarito({
    weight: '600'
})

const fredoka = Fredoka({
    weight: '300'
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
                            <Image src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} fill loading="lazy" className="object-cover rounded-md" />
                            <div className="absolute">
                                <h2 className={`${gabrito.className} text-primary z-10`}>{project.title.rendered}</h2>
                                <ul className="flex gap-2 items-center justify-center z-10">
                                    {project.acf.development.tools.map((tools: any) => (
                                        <li key={tools.term_id} className={`${fredoka.className} stack`}>{tools.name}</li>
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