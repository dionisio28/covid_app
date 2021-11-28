export interface Places {
    data: PlacesData[];
}

export interface PlacesData {
    id: string;
    name: string;
    longitute: number;
    vaccinated: number;
    recovered: number;
    latitude: number;
    lastUpdated: Date;
    infected: number;
    pop: number;
    dead: number;
    country: string;
    sick: number;
    invisible: boolean
}