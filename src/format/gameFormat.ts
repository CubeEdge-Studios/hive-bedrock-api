import calculateLevel from "../methods/calculateLevel";
import { API_USER_MAIN } from "../types/API";
import { USER_MAIN } from "../types/GAMES";
import { GAME } from "../types/GAME_INFO";

interface SingleGameFormat {
    [key: string]: any;
}
interface GameFormat {
    [key: string]: SingleGameFormat | null;
}

export const formats = {
    main: (player: SingleGameFormat) => {
        if ("first_played" in player)
            player.first_played = new Date(player.first_played * 1000);

        return player;
    },
    default: (gameType: GAME, game: SingleGameFormat) => {
        if ("index" in game && game.index == 2147483646) return null;

        if ("xp" in game!) {
            game.level = calculateLevel(game.xp, GAME.CaptureTheFlag);
        } else return null;

        if ("first_played" in game)
            game.first_played = new Date(game.first_played * 1000);

        if ("played" in game && "victories" in game)
            game.losses = game.played - game.victories;

        if ("kills" in game && "deaths" in game)
            game.kdr = parseFloat((game.kills / game.deaths).toFixed(2));

        return { id: gameType, ...game };
    },
    [GAME.BlockDrop]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.BlockParty]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.CaptureTheFlag]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.DeathRun]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.GroundWars]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.HideAndSeek]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.JustBuild]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.MurderMystery]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.Skywars]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.SurvivalGames]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.TreasureWars]: (game: SingleGameFormat | null) => {
        return game;
    },
    [GAME.TheBridge]: (game: SingleGameFormat | null) => {
        return game;
    },
};

export function gameFormatArray(
    gameType: GAME,
    games: SingleGameFormat[]
): (SingleGameFormat | null)[] {
    return games.map((game) =>
        gameFormat(
            {
                [gameType]: game,
            },
            true
        )
    );
}

export default function gameFormat(
    games: GameFormat,
    returnAsSingle: true
): SingleGameFormat | null;
export default function gameFormat(games: GameFormat): GameFormat | null;

export default function gameFormat(
    games: GameFormat,
    returnAsSingle?: boolean
): (GameFormat | SingleGameFormat) | null {
    const formatted = Object.fromEntries(
        Object.entries(games).map(([key, data]) => {
            if (!data) return [key, null];
            let defaultFormat = formats.default(key as GAME, data!);

            if (!defaultFormat) return [key, null];
            let gameFormat = formats[key as GAME](defaultFormat);

            return [key, gameFormat];
        })
    );

    return returnAsSingle ? Object.values(formatted)[0] : formatted;
}
