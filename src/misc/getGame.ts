import { Game } from "../config";

export interface GameOutput {
    key: Game;
    name: string;
    maxLevel: number;
    maxPrestige: number;
    xpCap: number;
    xpIncrement: number;
}

const games = new Map<Game, GameOutput>([
    [
        "wars",
        {
            key: "wars",
            name: "Treasure Wars",
            maxLevel: 100,
            maxPrestige: 5,
            xpCap: 52,
            xpIncrement: 150,
        },
    ],
    [
        "sg",
        {
            key: "sg",
            name: "Survival Games",
            maxLevel: 30,
            maxPrestige: 0,
            xpCap: 0,
            xpIncrement: 150,
        },
    ],
    [
        "sky",
        {
            key: "sky",
            name: "Skywars",
            maxLevel: 75,
            maxPrestige: 0,
            xpCap: 52,
            xpIncrement: 150,
        },
    ],
    [
        "murder",
        {
            key: "murder",
            name: "Murder Mystery",
            maxLevel: 100,
            maxPrestige: 0,
            xpCap: 82,
            xpIncrement: 100,
        },
    ],
    [
        "build",
        {
            key: "build",
            name: "Just Build",
            maxLevel: 20,
            maxPrestige: 0,
            xpCap: 0,
            xpIncrement: 100,
        },
    ],
    [
        "hide",
        {
            key: "hide",
            name: "Hide and Seek",
            maxLevel: 50,
            maxPrestige: 0,
            xpCap: 0,
            xpIncrement: 100,
        },
    ],
    [
        "dr",
        {
            key: "dr",
            name: "DeathRun",
            maxLevel: 40,
            maxPrestige: 0,
            xpCap: 0,
            xpIncrement: 200,
        },
    ],
]);

export default function getGame(game: Game): GameOutput {
    var blank = {
        key: "",
        name: "",
        maxLevel: 0,
        maxPrestige: 0,
        xpCap: 0,
        xpIncrement: 0,
    };

    switch (game) {
        case "wars":
            var value = games.get("wars");
            return value ? value : blank;
        case "sg":
            var value = games.get("sg");
            return value ? value : blank;
        case "sky":
            var value = games.get("sky");
            return value ? value : blank;
        case "murder":
            var value = games.get("murder");
            return value ? value : blank;
        case "build":
            var value = games.get("build");
            return value ? value : blank;
        case "hide":
            var value = games.get("hide");
            return value ? value : blank;
        case "dr":
            var value = games.get("dr");
            return value ? value : blank;
        default:
            return blank;
    }
}

export function getAllGames(): GameOutput[] {
    var arrayValue = Array.from(games.values());
    return arrayValue;
}
