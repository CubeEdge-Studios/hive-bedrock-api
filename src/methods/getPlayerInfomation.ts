import { MapMetadata, PlayerMetadata } from "hive-bedrock-data";
import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";

export default function getPlayerInfomation(
    identifier: string,
    options?: Options
): Promise<APIResponse<PlayerMetadata>>;

export default async function getPlayerInfomation(
    identifier: string,
    options?: Options
): Promise<APIResponse<PlayerMetadata>> {
    let response = await fetchEndpoint(
        `/game/all/main/${identifier}`,
        options?.init
    );
    if (response.error) return response;

    return {
        ...response,
        data: response.data.main,
    };
}
