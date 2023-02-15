import FetchService from "@/api/FetchService";
import type {ISearchConfig} from 'types/character'

class RequestService {
    getAllCharacters(cfg?: ISearchConfig) {
        const url = `https://rickandmortyapi.com/api/character`
        return FetchService.getData(url, cfg);
    }

    getCharacterById(id: number) {
        const url = `https://rickandmortyapi.com/api/character/${id}`
        return FetchService.getData(url)
    }

    getEpisode(url: string) {
        return FetchService.getData(url)
    }
}

export default new RequestService()