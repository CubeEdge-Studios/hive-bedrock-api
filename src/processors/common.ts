import { Game, Timeframe } from "hive-bedrock-data";
import { StatisticsResponse } from "../types/output";

const commonProcessors: ((
    stats: StatisticsResponse<Game, Timeframe>
) => void)[] = [
    (stats) => (stats.victories = stats.victories ?? 0),
    (stats) => (stats.losses = stats.played - stats.victories),
    (stats) =>
        (stats.win_percentage =
            stats.played > 0 ? stats.victories / stats.played : 0),
];
export default commonProcessors;
