import { API_GLOBAL_STATISTICS } from "../types/API";
import { USER_MAIN } from "../types/GAMES";
import { MethodResponse } from "../types/METHODS";
import fetchData from "./fetchData";

export default async function getPlayerInfo(
    playerIdentifier: string
): Promise<MethodResponse<USER_MAIN>>;

export default async function getPlayerInfo(
    playerIdentifier: string
): Promise<MethodResponse<USER_MAIN>> {
    try {
        const { data, error } = await fetchData(
            `/game/all/main/${playerIdentifier}`
        );
        if (error || !data)
            return {
                data: null,
                error: { message: "Failed to fetch data.", ...error },
            };

        return { data: data.main, error: null };
    } catch (err) {
        console.error(err);
        return { data: null, error: { message: "Failed to fetch data." } };
    }
}
