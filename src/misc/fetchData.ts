import axios from "axios";
import { API_ENDPOINT, Game } from "../config";
import Response from "./Response";
import ResponseData from "./ResponseData";

export type APIPath =
    | `/game/all/${Game}/${string}`
    | `/game/all/${Game}`
    | `/game/monthly/${Game}`
    | `/game/monthly/${Game}/${number}/${number}/${number}/${number}`
    | `/game/monthly/player/${Game}/${string}`
    | `/game/monthly/player/${Game}/${string}/${number}/${number}`;

async function fetch(apiPath: APIPath) {
    try {
        const request = await axios.get(API_ENDPOINT + apiPath);
        return [apiPath, request];
    } catch (err: any) {
        return [apiPath, err?.response];
    }
}

export default async function fetchData(apiPaths: APIPath[]) {
    let responses = await Promise.all(apiPaths.map((path) => fetch(path)));
    let responseValues = responses.map(
        ([apiPath, response]) => new Response(apiPath, response)
    );
    return responseValues;
}
