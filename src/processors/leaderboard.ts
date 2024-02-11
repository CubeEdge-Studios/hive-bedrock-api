import { Game, Leaderboards, Timeframe } from "hive-bedrock-data";

export default function leaderboardModifier(
    ...processors: ((stats: any) => void)[]
) {
    return (stats: any[]) => {
        return stats.map((record) => {
            for (let processor of processors) {
                processor(record);
            }
            return record;
        });
    };
}
