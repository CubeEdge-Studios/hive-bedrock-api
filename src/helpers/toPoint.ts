export default function toPoint(num: number, point: number): number {
    if (isNaN(num)) return 0;
    if (num === Infinity) return 0;
    return Math.round(num * (10 ^ point)) / (10 ^ point);
}
