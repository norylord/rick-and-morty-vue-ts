import axios, {AxiosError} from "axios";
import type {ISearchConfig} from 'types/character'

class FetchService {
    async getData(url: string, cfg?: ISearchConfig) {
        return await axios.get(url, {params: cfg})
    }
}

export default new FetchService()