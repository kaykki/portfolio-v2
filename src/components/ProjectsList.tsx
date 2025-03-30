import { fetchProjects } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";

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
            <h1 className="font-gabarito text-2xl mt-8">Projects</h1>
            <ul className="flex flex-col gap-4 items-center justify-center">
                {projects.map((project: any) => (
                    <li key={project.id} className="w-[326px] h-[85px] relative p-4">
                        <Link href={`/projects/${project.id}`}>
                            <div className="absolute inset-0 bg-black rounded-md"></div>
                            <Image src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} fill loading="lazy" className="object-cover rounded-md opacity-29" />
                            <div className="absolute flex flex-col gap-2 z-20">
                                <svg
                                    className="absolute top-0 right-0"
                                    width="16"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path className="fill-primary" d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
                                </svg>
                                <h2 className="font-gabarito text-secondary">{project.title.rendered}</h2>

                                {/* Tech Stack */}
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