"use client"

import { useState, useEffect, use } from "react";
import { fetchTechStack } from "@/utils/api"
import { Stack } from "@/utils/types";
import Image from "next/image";

export default function TechStack() {

    const [category, setCategory] = useState("");
    const [currentStack, setCurrentSetStack] = useState<Stack[]>([]);
   
    useEffect(() => {
        fetchTechStack(category).then(data => setCurrentSetStack(data)); 
    }, [category]);

    return (
        <section className='card tech-stack'>
            <ul className='font-gabarito flex gap-2 absolute top-0 right-4'>
                <li className={`${category == "" ? "bg-accent" : ""} tech-stack-facet`} 
                    onClick={() => setCategory("")}>
                    All
                </li>
                <li className={`${category == "development" ? "bg-accent" : ""} tech-stack-facet`} 
                    onClick={() => setCategory("development")}>
                    Development
                </li>
                <li className={`${category == "design" ? "bg-accent" : ""} tech-stack-facet`} 
                    onClick={() => setCategory("design")}>
                    Design
                </li>
            </ul>
            <h2 className='font-gabarito title mt-12 mb-4'>Tech Stack</h2>

            <ul className="font-fredoka flex flex-wrap gap-2">
                {currentStack.map((stackItem) =>(
                    <li key={stackItem.icon.id} 
                        className="stack py-2 flex gap-2 items-center">
                        <Image src={stackItem.icon.url} alt="" width={20} height={20}></Image>
                        {stackItem.name}
                    </li>
                ))}
            </ul>
            
        </section>
    )
}