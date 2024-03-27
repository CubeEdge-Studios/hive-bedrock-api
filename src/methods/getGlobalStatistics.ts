import { GlobalStatisticsMetadata } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";

export default function getGlobalStatistics(
    options?: Options
): Promise<APIResponse<GlobalStatisticsMetadata>>;

export default async function getGlobalStatistics(
    options?: Options
): Promise<APIResponse<GlobalStatisticsMetadata>> {
    let response = await fetchEndpoint(`/global/statistics`, options?.init);
    return response;
}
