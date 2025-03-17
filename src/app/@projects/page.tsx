import { Card } from '@/components/card';
import { fetchProjects } from '@/lib/api'

export default async function Projects() {
    const response = await fetch("https://kayki.ca/portfolio/wp-json/wp/v2/projects?_embed");
    
    if(!response.ok) throw new Error("Failed to fetch projects");

    const data = await response.json();
    console.log(data);
    
    return (
        <Card>
            <h1>Projects</h1>
            <ul>
                {data.map((project: any) => (
                    <li key={project.id}>
                        <h2>{project.title.rendered}</h2>
                        <img src={project._embedded['wp:featuredmedia'][0].source_url} alt={project.title.rendered} />
                        {/* <div dangerouslySetInnerHTML={{__html: project.content.rendered}} /> */}
                    </li>
                ))}
            </ul>
        </Card>
    );
}