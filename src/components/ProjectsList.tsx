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
        <section className="flex gap-4 flex-col card-coloured order-5 col-span-2 relative">
            <div className="bg-secondary px-4 py-2 flex gap-4 w-fit absolute top-0 right-4 rounded-b-xl">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path className="facet" d="M7.33333 6.33333H0V-1H7.33333V6.33333ZM16 6.33333H8.66667V-1H16V6.33333ZM7.33333 15H0V7.66667H7.33333V15ZM16 15H8.66667V7.66667H16V15Z" fill="#004D57" />
                    </g>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M16 12V16H0L0 12H16ZM0 6L0 10H16V6L0 6ZM0 -4.76837e-07L0 4L16 4V-4.76837e-07H0Z" fill="#004D57" />
                    </g>
                </svg>
            </div>
            <h1 className={`${gabrito.className} text-2xl mt-8`}>Projects</h1>
            <ul className="flex flex-col gap-4 items-center justify-center">
                {projects.map((project: any) => (
                    <li key={project.id} className="w-[326px] h-[79px] relative p-4">
                        <Link href={`/projects/${project.id}`}>
                            <div className="absolute inset-0 bg-black rounded-md"></div>
                            <Image src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} fill loading="lazy" className="object-cover rounded-md opacity-29" />
                            <div className="absolute z-20">
                                <h2 className={`${gabrito.className} text-secondary`}>{project.title.rendered}</h2>
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