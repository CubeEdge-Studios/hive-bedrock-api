import {
    API_BASE_GAME_ALL,
    API_BASE_GAME_MONTHLY,
    API_GAME_STATS,
    API_GLOBAL_STATISTICS,
    API_REQUEST_ALL,
    API_REQUEST_LB,
} from "../types/API";
import {
    ENDPOINTS,
    GAME_LB_ALLTIME_ENDPOINT,
    GAME_LB_MONTHLY_ENDPOINT,
    GAME_LB_SPECIFIC_MONTHLY_ENDPOINT,
    GLOBAL_STATISTICS_ENDPOINT,
    PLAYER_ALLTIME_ENDPOINT,
    PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT,
    PLAYER_MONTHLY_ENDPOINT,
} from "../types/ENDPOINTS";
import { GAME } from "../types/GAME_INFO";
import { MethodResponse } from "../types/METHODS";

export const API_ROOT = "https://api.playhive.com/v0";

export default async function fetchData(
    endpoint: PLAYER_ALLTIME_ENDPOINT<"all", string>
): Promise<MethodResponse<API_REQUEST_ALL>>;

export default async function fetchData<G extends GAME>(
    endpoint: PLAYER_ALLTIME_ENDPOINT<G, string>
): Promise<MethodResponse<API_GAME_STATS<API_BASE_GAME_ALL>[G]>>;

export default async function fetchData(
    endpoint: PLAYER_MONTHLY_ENDPOINT<"all", string>
): Promise<MethodResponse<API_GAME_STATS<API_BASE_GAME_MONTHLY>>>;

export default async function fetchData<G extends GAME>(
    endpoint: PLAYER_MONTHLY_ENDPOINT<G, string>
): Promise<MethodResponse<API_GAME_STATS<API_BASE_GAME_MONTHLY>[G]>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_LB_ALLTIME_ENDPOINT<G>
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_LB_MONTHLY_ENDPOINT<G>
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData<G extends GAME>(
    endpoint: PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT<
        G,
        string,
        number,
        number,
        number,
        number
    >
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData<G extends GAME>(
    endpoint: GAME_LB_SPECIFIC_MONTHLY_ENDPOINT<
        G,
        number,
        number,
        number,
        number
    >
): Promise<MethodResponse<API_REQUEST_LB<G>>>;

export default async function fetchData(
    endpoint: GLOBAL_STATISTICS_ENDPOINT
): Promise<MethodResponse<API_GLOBAL_STATISTICS>>;

export default async function fetchData<G extends GAME>(
    endpoint: ENDPOINTS<G>
): Promise<
    MethodResponse<
        | API_GLOBAL_STATISTICS
        | API_GAME_STATS<API_BASE_GAME_ALL>
        | API_GAME_STATS<API_BASE_GAME_ALL>[G]
        | API_GAME_STATS<API_BASE_GAME_MONTHLY>
        | API_GAME_STATS<API_BASE_GAME_MONTHLY>[G]
        | API_REQUEST_LB<G>
        | PLAYER_LB_SPECIFIC_MONTHLY_ENDPOINT<
              G,
              string,
              number,
              number,
              number,
              number
          >
        | GAME_LB_SPECIFIC_MONTHLY_ENDPOINT<G, number, number, number, number>
    >
> {
    try {
        const request = await fetch(API_ROOT + endpoint);

        if (!request.ok)
            return {
                data: null,
                error: {
                    message: request.statusText,
                    status: request.status,
                    endpoint: API_ROOT + endpoint,
                },
            };

        const response = await request.json();

        return {
            data: response,
            error: null,
        };
    } catch (err) {
        console.error(err);
        return {
            data: null,
            error: { message: "Failed to fetch data." },
        };
    }
}
