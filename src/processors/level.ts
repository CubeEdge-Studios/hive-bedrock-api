import { Game, Timeframe, calculateLevelFromXP } from "hive-bedrock-data";
import { StatisticsResponse } from "../types/output";

const levelProcessors: ((
    stats: StatisticsResponse<Game, Timeframe.AllTime>
) => void)[] = [
    (stats) => {
        if (stats.xp)
            stats.level = calculateLevelFromXP(stats.xp, stats.id) ?? 0;
    },
];
export default levelProcessors;
