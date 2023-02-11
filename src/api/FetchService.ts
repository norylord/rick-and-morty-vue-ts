import axios, {AxiosRequestConfig} from "axios";
import {SearchConfig} from "@/types/characters/charactres";

class FetchService {
    getData = async (url:string, cfg?: SearchConfig) => {
        return await axios.get(url, {params:cfg})
    }
}

export default new FetchService()