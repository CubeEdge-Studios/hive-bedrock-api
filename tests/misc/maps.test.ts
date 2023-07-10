import "../setup";
import { GAME, getMaps } from "../../src";

describe("game maps", () => {
    test.concurrent("fetch valid game maps", async () => {
        const { data, error } = await getMaps(GAME.TreasureWars);

        expect(data?.length).toBeGreaterThan(3);
        expect(error).toBe(null);
    });

    test.concurrent("fetch invalid game maps", async () => {
        const { data, error } = await getMaps(GAME.BlockParty);

        expect(data).toBe(null);
        expect(error?.message).toBe(
            "This game does not support this endpoint as it only has one map."
        );
    });
});
