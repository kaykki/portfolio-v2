"use client"

import { useState, useEffect, use } from "react";
import { fetchTechStack } from "@/utils/api"

export default function TechStack() {

    const [category, setCategory] = useState("");
    const [stack, setStack] = useState([""]);

    // useEffect(() => {

    //     setStack(["development", "design"])



    // }, [category]);

    console.log(stack);


    return (
        <section className='card order-6 col-span-2 relative'>
            <ul className='flex gap-2 absolute top-0 right-4'>
                <li className='tech-stack-facet' onClick={() => setCategory("")}>All</li>
                <li className='tech-stack-facet' onClick={() => setCategory("development")}>Development</li>
                <li className='tech-stack-facet' onClick={() => setCategory("design")}>Design</li>
            </ul>
            <h2 className='font-gabarito title mt-12'>Tech Stack</h2>

            {/* {fetchTechStack(category).then((data) => {
                return (
                    <ul className='flex gap-2 items-center justify-center'>
                        {data.map((tools: any) => (
                            <li key={tools.term_id} className="stack">{tools.name}</li>
                        ))}
                    </ul>
                )
            }
            )} */}
        </section>
    )
}