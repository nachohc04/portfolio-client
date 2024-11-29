const apiUrl = import.meta.env.VITE_API_URL;

export const getFeaturedProjects = async () => {
    const url = `${apiUrl}/projects/?featured=true`

    const res = await fetch(url);

    if (!res.ok){
        throw new Error(`Response status: ${res.status}`)
    }

    const featuredProjects = await res.json();
    console.log(featuredProjects)
    return featuredProjects;
}

export const getProjectById = async (projectId) => {
    const url = `${apiUrl}/projects/${projectId}`

    const res = await fetch(url);

    if (!res.ok){
        throw new Error(`Response status: ${res.status}`)
    }

    const project = await res.json();
    return project;
}