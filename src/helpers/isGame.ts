import { Game } from "hive-bedrock-data";

export default function isGame(game_id: Game) {
    return Object.values(Game).includes(game_id);
}
