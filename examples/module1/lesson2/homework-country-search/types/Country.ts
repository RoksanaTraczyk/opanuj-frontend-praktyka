export interface Country {
    name: CountryName;
    population: number;
    flags: Flag;
}

interface CountryName {
    common: string;
    official: string;
}

interface Flag {
    alt: string;
    png: string;
}