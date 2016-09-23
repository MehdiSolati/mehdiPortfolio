export interface Experience {
    role: string;
    orginization: string;
    logo: string;
    website: string;
    dates: {
        start: string;
        end?: string;
    };
    location: string;
    description: string;
}
