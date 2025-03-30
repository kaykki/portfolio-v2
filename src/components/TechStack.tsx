import { fetchAboutMe } from "@/utils/api"

export default async function TechStack() {

    const about = await fetchAboutMe();

    console.log(about.acf);
    
    return (
        <section className='card order-6 col-span-2 relative'>
            <ul className='flex gap-2 absolute top-0 right-4'>
                <li className='tech-stack-facet'>All</li>
                <li className='tech-stack-facet'>Development</li>
                <li className='tech-stack-facet'>Design</li>
            </ul>
            <h2 className='font-gabarito title mt-12'>Tech Stack</h2>
        </section>
    )
}