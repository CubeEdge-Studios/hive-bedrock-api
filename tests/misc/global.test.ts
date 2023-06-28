import "../setup";
import { GAME, getGlobalStatistics } from "../../src";

describe("global statistics", () => {
    test.concurrent("fetch unique player counts", async () => {
        const { data, error } = await getGlobalStatistics();

        expect(Object.keys(data?.unique_players!)).toIncludeAllMembers([
            ...Object.values(GAME),
            "global",
            "main",
        ]);
        expect(error).toBe(null);
    });
});
