export async function fetchProjects() {
    const response = await fetch("https://kayki.ca/portfolio/wp-json/wp/v2/projects");
    
    if(!response.ok) throw new Error("Failed to fetch projects");
    
    return await response.json();
}