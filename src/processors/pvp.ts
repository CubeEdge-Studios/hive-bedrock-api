const pvpProcessors: ((stats: {
    kdr: number;
    kills?: number;
    deaths?: number;
    hider_kills?: number;
    murders?: number;
}) => void)[] = [
    (stats) => {
        if ("kills" in stats && "deaths" in stats)
            stats.kdr = parseFloat(
                ((stats.kills ?? 0) / (stats.deaths ?? 0)).toFixed(2)
            );
    },
    (stats) => {
        if ("hider_kills" in stats && "deaths" in stats)
            stats.kdr = parseFloat(
                ((stats.hider_kills ?? 0) / (stats.deaths ?? 0)).toFixed(2)
            );
    },
    (stats) => {
        if ("murders" in stats && "deaths" in stats)
            stats.kdr = parseFloat(
                ((stats.murders ?? 0) / (stats.deaths ?? 0)).toFixed(2)
            );
    },
];
export default pvpProcessors;
