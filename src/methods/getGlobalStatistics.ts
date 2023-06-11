import { API_GLOBAL_STATISTICS } from "../types/API";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getGlobalStatistics(): Promise<
    MethodResponse<API_GLOBAL_STATISTICS>
>;

export default async function getGlobalStatistics(): Promise<
    MethodResponse<API_GLOBAL_STATISTICS>
> {
    try {
        const { data, error } = await fetchData(`/global/statistics`);
        if (error || !data)
            return {
                data: null,
                error: { message: "Failed to fetch data.", ...error },
            };

        return { data, error: null };
    } catch (err) {
        return { data: null, error: { message: "Failed to fetch data." } };
    }
}
