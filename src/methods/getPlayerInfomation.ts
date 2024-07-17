import { APIResponse, Options } from "../types/types";
import fetchEndpoint from "../helpers/fetchEndpoint";
import { PlayerProcessor } from "../processors";
import { Processed_Player_Statistics } from "../processors/player";

export default function getPlayerInfomation(
    identifier: string,
    options?: Partial<Options>
): Promise<APIResponse<Processed_Player_Statistics>>;

export default async function getPlayerInfomation(
    identifier: string,
    options?: Partial<Options>
) {
    let response = await fetchEndpoint(
        `/game/all/main/${identifier}`,
        options?.init
    );
    if (response.error) return response;

    let response_data = response.data.main;
    let processed_data = PlayerProcessor(response_data);

    return {
        ...response,
        data: processed_data,
    };
}
