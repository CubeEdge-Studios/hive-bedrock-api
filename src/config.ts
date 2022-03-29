export type Game = String | "sky" | "wars" | "hide" | "sg" | "dr" | "murder";
export type GameWithArray =
    | "sky"
    | "wars"
    | "hide"
    | "sg"
    | "dr"
    | "murder"
    | Game[];
export type Mode = "all" | "monthly";
export type PlayerIdentifier = string;

export const API_ENDPOINT: string = "https://api.playhive.com/v0";
export const API_GAMES: Game[] = ["sky", "wars", "hide", "sg", "dr", "murder"];
export const API_MODES: Array<Mode> = ["all", "monthly"];
