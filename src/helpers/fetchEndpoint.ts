import { API_SERVER } from "..";
import { APIResponse } from "../types/types";
import { Routes } from "hive-bedrock-data";

export default async function fetchEndpoint<T extends string>(
    endpoint: T,
    init?: RequestInit
): Promise<APIResponse<Routes<T>>>;

export default async function fetchEndpoint<T extends string>(
    endpoint: T,
    init?: RequestInit
): Promise<APIResponse<Routes<T>>> {
    try {
        let time_start = performance.now();
        let request = await fetch(API_SERVER + endpoint, init);
        let time_end = performance.now();
        let duration = Math.round(time_end - time_start);

        if (!request.ok)
            return {
                status: request.status,
                data: null,
                error: {
                    code: request.status,
                    message: request.statusText,
                },
                duration,
            };

        let response = await request.json();

        return {
            status: request.status,
            data: response,
            error: null,
            duration,
        };
    } catch (err) {
        return {
            status: 500,
            data: null,
            error: {
                code: 500,
                message: "Failed to fetch endpoint data.",
            },
        };
    }
}
