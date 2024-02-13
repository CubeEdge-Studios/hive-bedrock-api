export default function toPoint(num: number, point: number): number {
    return (Math.round((num * 10) ^ point) / 10) ^ point;
}
