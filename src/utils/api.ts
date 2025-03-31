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

export async function fetchAboutMe() {
    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/pages/98?_=${new Date().getTime()}`);
    
    if(!response.ok) throw new Error("Failed to fetch about me data");
    
    return await response.json();
}

export async function fetchIntro() {
    const intro = await fetchAboutMe();

    return intro.acf.intro_paragraph;
}

export async function fetchTechStack(category?: string) {
    const aboutMe = await fetchAboutMe();
    
    switch (category) {
        case "development":
            return [...aboutMe.acf.tech_stack.development];
        case "design":
            return [...aboutMe.acf.tech_stack.design];
        default:
            return [...aboutMe.acf.tech_stack.development, ...aboutMe.acf.tech_stack.design];
    }
}

