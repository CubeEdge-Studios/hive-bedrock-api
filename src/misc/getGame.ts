import { Game } from "../config";

export interface GameOutput {
    key: Game;
    name: string;
    maxLevel: number;
    maxPrestige: number;
    xpCap: number;
    xpIncrement: number;
}

export default function getGame(game: Game): GameOutput {
    switch (game) {
        case "wars":
            return {
                key: "wars",
                name: "Treasure Wars",
                maxLevel: 100,
                maxPrestige: 5,
                xpCap: 52,
                xpIncrement: 150,
            };
        case "sg":
            return {
                key: "sg",
                name: "Survival Games",
                maxLevel: 30,
                maxPrestige: 0,
                xpCap: 0,
                xpIncrement: 150,
            };
        case "sky":
            return {
                key: "sky",
                name: "Skywars",
                maxLevel: 75,
                maxPrestige: 0,
                xpCap: 52,
                xpIncrement: 150,
            };
        case "murder":
            return {
                key: "murder",
                name: "Murder Mystery",
                maxLevel: 100,
                maxPrestige: 0,
                xpCap: 82,
                xpIncrement: 100,
            };
        case "build":
            return {
                key: "build",
                name: "Just Build",
                maxLevel: 20,
                maxPrestige: 0,
                xpCap: 0,
                xpIncrement: 100,
            };
        case "hide":
            return {
                key: "hide",
                name: "Hide and Seek",
                maxLevel: 50,
                maxPrestige: 0,
                xpCap: 0,
                xpIncrement: 100,
            };
        case "dr":
            return {
                key: "dr",
                name: "DeathRun",
                maxLevel: 40,
                maxPrestige: 0,
                xpCap: 0,
                xpIncrement: 200,
            };
        default:
            return {
                key: "",
                name: "",
                maxLevel: 0,
                maxPrestige: 0,
                xpCap: 0,
                xpIncrement: 0,
            };
    }
}
