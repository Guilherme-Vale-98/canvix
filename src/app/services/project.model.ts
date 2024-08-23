export interface Project {
    imgUrl: string,
    title: string,
    subtitle: string,
    category: string,
    client: string,
    date: string,
    location: string,
    description: Description
}

export interface Description {
    challenge: string,
    solution: string,
    result: string
}