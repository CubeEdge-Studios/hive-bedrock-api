export default function processPlayedAndVictories(
    played?: number,
    victories?: number
): { played: number; victories: number; losses: number; win_percentage: number } {
    played ??= 0;
    victories ??= 0;

    let losses = played - victories;
    let win_percentage = victories / played;
    if (isNaN(win_percentage)) win_percentage = 0;
    return { played, victories, losses, win_percentage };
}
