import toPoint from "../../helpers/toPoint";

export default function processKillsAndDeaths(
    kills?: number,
    deaths?: number
): { kills: number; deaths: number; kdr: number } {
    kills ??= 0;
    deaths ??= 0;

    let kdr = toPoint(kills / deaths, 2);
    return { kills, deaths, kdr };
}
