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
                    <li key={project.id} className="w-[326px] h-[79px] relative">
                        <Link href={`/projects/${project.id}`}>
                            <h2 className={`${gabrito.className} absolute text-primary z-10`}>{project.title.rendered}</h2>
                            <Image src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} fill loading="lazy" className="object-cover rounded-md"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}