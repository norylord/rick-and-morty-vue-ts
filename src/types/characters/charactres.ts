export interface Character {
    id?: number,
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string,
    origin?: object,
    location?: object,
    image?: URL,
    episode?: URL[],
    URL?: URL,
    created?: string,
}

export interface Characters {
    characters: Character[]
}

export enum CharactersStatus {
    Dead = 'Dead',
    Alive = 'Alive',
    Unknown = 'Unknown',
    None = ''
}

export interface SearchConfig {
    name: string,
    status: CharactersStatus,
    page: number
}