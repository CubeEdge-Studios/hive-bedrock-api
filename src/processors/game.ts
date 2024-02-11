import { Game, Timeframe } from "hive-bedrock-data";
import { StatisticsResponse } from "../types/output";

export default function game(game_id: Game) {
    return (stats: StatisticsResponse<Game, Timeframe>) => (stats.id = game_id);
}
