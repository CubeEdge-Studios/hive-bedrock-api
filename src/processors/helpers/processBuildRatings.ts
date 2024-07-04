export default function processBuildRatings(
    rating_love_received?: number,
    rating_great_received?: number,
    rating_good_received?: number,
    rating_okay_received?: number,
    rating_meh_received?: number
): {
    total_ratings: number;
    rating_love_received: number;
    rating_great_received: number;
    rating_good_received: number;
    rating_okay_received: number;
    rating_meh_received: number;
} {
    rating_love_received ??= 0;
    rating_great_received ??= 0;
    rating_good_received ??= 0;
    rating_okay_received ??= 0;
    rating_meh_received ??= 0;

    let total_ratings =
        rating_love_received +
        rating_great_received +
        rating_good_received +
        rating_okay_received +
        rating_meh_received;

    return {
        total_ratings,
        rating_love_received,
        rating_great_received,
        rating_good_received,
        rating_okay_received,
        rating_meh_received,
    };
}
