import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

export const http = axios.create({
    baseURL : 'https://fair.way.golf/api/v1',
    Accept : 'application.json',
    adapter : cacheAdapterEnhancer(
        axios.defaults.adapter,
        {enabledByDefault : false}
    ),
})