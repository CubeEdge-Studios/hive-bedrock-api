import { API_GAMES, API_MODES, Game, Mode } from "./config";
import fetchData, { APIPath } from "./misc/fetchData";

export default async function getStats(
    playerIdentifier: string,
    game: Game,
    mode: Mode
) {
    return new Promise((resolve, reject) => {
        let gameOption: Game[] = Array.from(
            typeof game == "string" ? [game] : game
        );

        for (const i in gameOption) {
            if (!API_GAMES.includes(gameOption[i]))
                reject(`Unkown game '${gameOption[i]}'.`);
        }

        if (!API_MODES.includes(mode)) reject(`Unkown mode '${mode}'.`);

        if (mode == "all") {
            var userStats = fetchData(
                gameOption.map<APIPath>(
                    (gameValue) => `/game/all/${gameValue}/${playerIdentifier}`
                )
            );
            resolve(userStats);
        }

        if (mode == "monthly") {
            var userStats = fetchData(
                gameOption.map<APIPath>(
                    (gameValue) =>
                        `/game/monthly/player/${gameValue}/${playerIdentifier}`
                )
            );
            resolve(userStats);
        }
    });
}
