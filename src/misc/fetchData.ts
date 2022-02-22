import axios from "axios";
import { API_ENDPOINT } from "../config";

type Game = "sky" | "wars" | "hide" | "sg" | "dr" | "murder";
type APIPath =
    | `/game/all/${Game}/${string}`
    | `/game/all/${Game}/[playerIdentifier]`
    | `/game/all/${Game}`
    | `/game/monthly/${Game}`
    | `/game/monthly/${Game}/${number}/${number}/${number}/${number}`
    | `/game/monthly/${Game}/[year]/[month]/[amount]/[skip]`
    | `/game/monthly/player/${Game}/${string}`
    | `/game/monthly/player/${Game}/[playerIdentifier]`
    | `/game/monthly/player/${Game}/${string}/${number}/${number}`
    | `/game/monthly/player/${Game}/[playerIdentifier]/[year]/[month]`;

export default async function fetchData(apiPath: APIPath) {
    try {
        const request = await axios.get(API_ENDPOINT + apiPath);
    } catch (err: any) {
        const { status, statusText } = err?.response;

        return {
            response: {
                status,
                message: statusText,
            },
            ratelimits: {},
            data: {},
        };
    }
}
