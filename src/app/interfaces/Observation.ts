export interface GeoLocation {
    lat: number;
    lng: number;
}

export interface Rarity {
    name: string;
    value: number;
}

export interface Observation {
    speciesName: string;
    rarity: Rarity;
    timestamp: number;
    notes: string;
    geolocation: GeoLocation;
    pictures: string[];
    videos: string[];
    sounds: string [];
}
