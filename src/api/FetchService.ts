import axios, {AxiosError} from "axios";
import {ISearchConfig} from "@/types/characters/charactres";

class FetchService {
    async getData  (url:string, cfg?: ISearchConfig){
        return await axios.get(url, {params:cfg})
    }
}

export default new FetchService()