import { API_GLOBAL_STATISTICS, Options } from "../types/API";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getGlobalStatistics(
    options?: Options
): Promise<MethodResponse<API_GLOBAL_STATISTICS>>;

export default async function getGlobalStatistics(
    options?: Options
): Promise<MethodResponse<API_GLOBAL_STATISTICS>> {
    try {
        const { data, error } = await fetchData(
            `/global/statistics`,
            options?.fetch
        );
        if (error || !data)
            return {
                data: null,
                error: { message: "Failed to fetch data.", ...error },
            };

        return { data, error: null };
    } catch (err) {
        console.error(err);
        return { data: null, error: { message: "Failed to fetch data." } };
    }
}
