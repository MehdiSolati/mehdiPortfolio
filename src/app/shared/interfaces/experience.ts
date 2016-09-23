export interface Experience {
    position: string;
    company: string;
    logo: string;
    website: string;
    dates: {
        start: string;
        end?: string;
    };
    location: string;
    description: string;
}
