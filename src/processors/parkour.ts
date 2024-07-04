import { Game, Statistics, Timeframe } from "hive-bedrock-data";

export interface Processed_ParkourWorlds_AllTimeStatistics
    extends Statistics<Game.ParkourWorlds, Timeframe.AllTime> {
    id: Game.ParkourWorlds;
}

type Parkours = Statistics<Game.ParkourWorlds, Timeframe.AllTime>["parkours"];
type ParkourWorld = Statistics<Game.ParkourWorlds, Timeframe.AllTime>["parkours"][string];
type ParkourCourse = ParkourWorld[string];

export function processAllTime_PARKOUR(
    statistics: Partial<Statistics<Game.ParkourWorlds, Timeframe.AllTime>>
): Processed_ParkourWorlds_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;
    return {
        UUID: statistics.UUID!,
        id: Game.ParkourWorlds,

        parkours: {
            total_stars: statistics.parkours?.total_stars ?? 0,

            ...(Object.fromEntries(
                (
                    Object.entries(statistics.parkours as {}).filter(
                        ([_, value]) => typeof value === "object"
                    ) as [string, ParkourWorld][]
                ).map(([world_name, world_data]) => [
                    world_name,
                    {
                        parkour_stars: world_data.parkour_stars,

                        ...Object.fromEntries(
                            (
                                Object.entries(world_data).filter(
                                    ([_, value]) => typeof value === "object"
                                ) as [string, ParkourCourse][]
                            ).map(([course_name, course_data]) => [
                                course_name,
                                {
                                    best_run_time: course_data.best_run_time ?? 0,
                                    best_checkpoint_times: course_data.best_checkpoint_times ?? [],
                                    collected_stars: course_data.collected_stars ?? [],
                                    course_stars: course_data.course_stars ?? 0,
                                },
                            ])
                        ),
                    },
                ])
            ) as { [key: string]: ParkourWorld }),
        } as Parkours,
    };
}
