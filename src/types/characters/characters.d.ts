declare module 'types/character' {

    export interface ICharacter {
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

    export enum CharactersStatus {
        Alive = 'Alive',
        Dead = 'Dead',
        Unknown = 'Unknown',
        None = ''
    }

    export interface ISearchConfig {
        name: string,
        status: string,
        page: number
    }
}