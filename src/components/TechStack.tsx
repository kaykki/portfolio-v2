"use client"

import { useState, useEffect, use } from "react";
import { fetchTechStack } from "@/utils/api"
import { Stack } from "@/utils/types";

export default function TechStack() {

    const [category, setCategory] = useState("");
    const [currentStack, currentSetStack] = useState<Stack[]>([]);
   
    useEffect(() => {
        fetchTechStack(category).then(data => currentSetStack(data));
    }, [category]);

    return (
        <section className='card order-6 col-span-2 relative'>
            <ul className='flex gap-2 absolute top-0 right-4'>
                <li className={`${category == "" ? "bg-accent" : ""} tech-stack-facet`} onClick={() => setCategory("")}>All</li>
                <li className={`${category == "development" ? "bg-accent" : ""} tech-stack-facet`} onClick={() => setCategory("development")}>Development</li>
                <li className={`${category == "design" ? "bg-accent" : ""} tech-stack-facet`} onClick={() => setCategory("design")}>Design</li>
            </ul>
            <h2 className='font-gabarito title mt-12 mb-4'>Tech Stack</h2>

            <ul className="flex flex-wrap gap-2">
                {currentStack.map((stackItem) =>(
                    <li key={stackItem.term_id} className="stack">{stackItem.name}</li>
                ))}
            </ul>
            
        </section>
    )
}