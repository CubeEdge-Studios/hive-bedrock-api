import "../setup";
import { GAME, getGameMetadata } from "../../src";

describe("game maps", () => {
    test.concurrent("fetch game metadata", async () => {
        const { data, error } = await getGameMetadata(GAME.TreasureWars);

        expect(data?.shortName).toBe(GAME.TreasureWars.toUpperCase());
        expect(error).toBe(null);
    });
});
