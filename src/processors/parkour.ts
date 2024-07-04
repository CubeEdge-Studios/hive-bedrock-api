import { Game, Statistics, Timeframe } from "hive-bedrock-data";

export interface Processed_ParkourWorlds_AllTimeStatistics
    extends Statistics<Game.ParkourWorlds, Timeframe.AllTime> {
    id: Game.ParkourWorlds;
}

type Parkours = Statistics<Game.ParkourWorlds, Timeframe.AllTime>["parkours"];
type ParkourWorld = Parkours[string];
type ParkourCourse = ParkourWorld[string];

function processParkourWorld(world: ParkourWorld): ParkourWorld {
    const processedCourses: [string, ParkourCourse][] = [];

    for (const [name, course] of Object.entries(world)) {
        if (typeof course !== "object") continue;

        const processedCourse: ParkourCourse = {
            best_run_time: course.best_run_time ?? 0,
            best_checkpoint_times: course.best_checkpoint_times ?? [],
            collected_stars: course.collected_stars ?? [],
            course_stars: course.course_stars ?? [],
        };

        processedCourses.push([name, processedCourse]);
    }

    return {
        parkour_stars: world.parkour_stars,
        ...Object.fromEntries(processedCourses),
    } as ParkourWorld;
}

export function processAllTime_PARKOUR(
    statistics: Partial<Statistics<Game.ParkourWorlds, Timeframe.AllTime>>
): Processed_ParkourWorlds_AllTimeStatistics | null {
    if (!statistics || Array.isArray(statistics)) return null;

    const worlds = Object.entries(statistics.parkours ?? {});
    const processedWorlds: [string, ParkourWorld][] = [];

    for (const [worldName, world] of worlds) {
        if (typeof world !== "object") continue;
        processedWorlds.push([worldName, processParkourWorld(world)]);
    }

    const parkours = {
        total_stars: statistics.parkours?.total_stars ?? 0,
        ...Object.fromEntries(processedWorlds),
    } as Parkours;

    const parkourStatistics: Processed_ParkourWorlds_AllTimeStatistics = {
        UUID: statistics.UUID!,
        id: Game.ParkourWorlds,
        parkours,
    };

    return parkourStatistics;
}
