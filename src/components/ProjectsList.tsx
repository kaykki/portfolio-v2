"use client"

import { useState, useEffect } from "react";
import { Project } from "@/utils/types";
import { fetchProjects } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsList() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [listLayout, setListLayout] = useState("rows");

    useEffect(() => {
        fetchProjects().then(data => setProjects(data));
    }, []);

    return (
        <section className="card-coloured project-list">

            {/* Layout Facets */}
            <div className="bg-secondary px-4 py-2 flex gap-4 w-fit absolute top-0 right-4 rounded-b-xl">
                <div onClick={() => setListLayout("grid")} 
                     className="cursor-pointer 
                                w-4 mobile-s:w-4.5 
                                h-4 mobile-s:h-4.5">
                    <svg viewBox="0 0 16 16" 
                         fill="none" 
                         xmlns="http://www.w3.org/2000/svg"
                         className={`facet ${listLayout == "grid" ? "fill-accent" : "fill-primary"}`}>
                        <g>
                            <path d="M7.33333 6.33333H0V-1H7.33333V6.33333ZM16 6.33333H8.66667V-1H16V6.33333ZM7.33333 15H0V7.66667H7.33333V15ZM16 15H8.66667V7.66667H16V15Z"/>
                        </g>
                    </svg>
                </div>
                <div onClick={() => setListLayout("rows")} 
                     className="cursor-pointer 
                                w-4 mobile-s:w-4.5
                                h-4 mobile-s:h-4.5">
                    <svg viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${listLayout == "rows" ? "fill-accent" : "fill-primary"}`}>
                        <g>
                            <path d="M16 12V16H0L0 12H16ZM0 6L0 10H16V6L0 6ZM0 -4.76837e-07L0 4L16 4V-4.76837e-07H0Z"/>
                        </g>
                    </svg>
                </div >
            </div>

            {/* Project Cards */}
            <h2 className="title mt-8 ">Projects</h2>
            <ul className={
                `overflow-y-scroll
                 grid ${listLayout == "rows" 
                ? "grid-cols-1" 
                : "grid-cols-2"}  
                gap-4 mobile-l:gap-6 items-center justify-center`}>
                {projects.map((project: any) => (
                    <li key={project.id}
                        className={`relative p-2 w-full 
                            ${listLayout == "rows" 
                            ? "h-[150px] desktop-s:h-[10rem]" 
                            : "h-[200px]"}`}>
                        <div className="absolute inset-0 bg-black rounded-md"></div>
                        <Link href={`/projects/${project.id}`}>
                            <Image
                                src={project._embedded['wp:featuredmedia'][0].source_url}
                                alt={project.title.rendered}
                                fill
                                loading="lazy"
                                className="object-cover rounded-md opacity-35"/>
                            <svg
                                className="absolute top-4 right-4"
                                width="20"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-secondary" d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z" />
                            </svg>
                            <div className="absolute bottom-4 flex flex-col gap-2 z-20">

                                <h2 className="sub-title text-secondary">{project.title.rendered}</h2>

                                {/* Tech Stack */}
                                <ul className="flex flex-wrap gap-2 items-center justify-baseline">
                                    {project.acf.development.tools.slice(0, 3).map((tools: any) => (
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