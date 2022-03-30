import { Game } from "../config";
import getGame from "./getGame";

interface Level {
    level: number;
    xp: number;
}

export class XP {
    xp: number;
    game: Game;
    max: number;
    cap: number;
    increment: number;

    constructor(game: Game, xp: number) {
        this.xp = xp;
        this.game = getGame(game).key;
        this.max = getGame(game).maxLevel;
        this.cap = getGame(game).xpCap;
        this.increment = getGame(game).xpIncrement;
    }
    _getTable() {
        let table: Array<Level> = [];
        let currentXP: number = 0;

        for (let i = 0; i < this.max; i++) {
            var lastValue = table[table.length - 1]?.xp || 0;
            table[i] = { level: i + 1, xp: lastValue + currentXP };

            if (this.cap == 0 && i != this.max) {
                currentXP = currentXP + this.increment;
            } else if (i != this.max - 1 && i < this.cap - 1)
                currentXP = currentXP + this.increment;
        }

        return table;
    }
    getLevel(round = true) {
        var increment = this.increment / 2;

        let level: number =
            (-increment +
                Math.sqrt(Math.pow(increment, 2) - 4 * increment * -this.xp)) /
                (2 * increment) +
            1;

        if (this.cap && level > this.cap)
            level =
                this.cap +
                (this.xp -
                    (increment * Math.pow(this.cap - 1, 2) +
                        (this.cap - 1) * increment)) /
                    ((this.cap - 1) * increment * 2);

        var rounded: number = parseInt(level.toString());
        if (round) return rounded;
        return level;
    }
    getPercentageToNextLevel() {
        var table = this._getTable();
        var level = this.getLevel();

        var currentLevel = table[level - 1];
        var nextLevel = table[level];

        if (!nextLevel) return 1;

        var levelDone = this.xp - currentLevel.xp;
        var levelXP = nextLevel.xp - currentLevel.xp;

        return levelDone / levelXP;
    }
    getXPToNextLevel() {
        var table = this._getTable();
        var level = this.getLevel();

        var currentLevel = table[level - 1];
        var nextLevel = table[level];

        if (!nextLevel) return 0;

        var levelDone = this.xp - currentLevel.xp;
        var levelXP = nextLevel.xp - currentLevel.xp;

        return levelXP - levelDone;
    }
    getPercentageToMaxLevel() {
        var table = this._getTable();

        if (this.xp > table[table.length - 1].xp) return 1;

        return this.xp / table[table.length - 1].xp;
    }
    getXPToMaxLevel() {
        var table = this._getTable();

        if (this.xp > table[table.length - 1].xp) return 0;

        return table[table.length - 1].xp - this.xp;
    }
}
