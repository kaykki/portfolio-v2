export async function fetchProjects() {
    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/projects?_embed`);
    
    if(!response.ok) throw new Error("Failed to fetch projects");
    
    return await response.json();
}

export async function fetchProjectData(id: string) {
    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/projects${id ? `/${id}` : ""}?_embed`);
    
    if(!response.ok) throw new Error("Failed to fetch project data");
    
    return await response.json();
}