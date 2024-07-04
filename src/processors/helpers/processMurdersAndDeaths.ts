import toPoint from "../../helpers/toPoint";

export default function processMurdersAndDeaths(
    murders?: number,
    deaths?: number
): { murders: number; deaths: number; kdr: number } {
    murders ??= 0;
    deaths ??= 0;

    let kdr = toPoint(murders / deaths, 2);
    return { murders, deaths, kdr };
}
