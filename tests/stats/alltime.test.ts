import "../setup";
import { GAME, getAllTimeStats } from "../../src";

describe("all-time statistics", () => {
    test.concurrent("fetch all games", async () => {
        const { data, error } = await getAllTimeStats("ucdfiddes");

        expect(Object.keys(data!)).toIncludeAllMembers(Object.values(GAME));
        expect(error).toBe(null);
    });

    test.concurrent("player is returned", async () => {
        const { error, player } = await getAllTimeStats("ucdfiddes");

        expect(player).toBeObject();
        expect(error).toBe(null);
    });

    test.concurrent("fetch single game", async () => {
        const { data, error } = await getAllTimeStats(
            "ucdfiddes",
            GAME.TreasureWars
        );

        expect(data?.id).toEqual(GAME.TreasureWars);
        expect(error).toBe(null);
    });

    test.concurrent("fetch multiple games", async () => {
        const { data, error } = await getAllTimeStats("ucdfiddes", [
            GAME.TreasureWars,
            GAME.BlockDrop,
            GAME.MurderMystery,
            GAME.HideAndSeek,
        ]);

        expect(Object.keys(data!)).toIncludeAllMembers([
            GAME.TreasureWars,
            GAME.BlockDrop,
            GAME.MurderMystery,
            GAME.HideAndSeek,
        ]);
        expect(error).toBe(null);
    });
});
