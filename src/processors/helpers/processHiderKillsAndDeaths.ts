import toPoint from "../../helpers/toPoint";

export default function processHiderKillsAndDeaths(
    hider_kills?: number,
    deaths?: number
): { hider_kills: number; deaths: number; kdr: number } {
    hider_kills ??= 0;
    deaths ??= 0;

    let kdr = toPoint(hider_kills / deaths, 2);
    return { hider_kills, deaths, kdr };
}
