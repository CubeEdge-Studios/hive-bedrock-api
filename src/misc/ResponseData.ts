import { API_GAMES, Game } from "../config";
import { APIPath } from "./fetchData";
import getGame, { GameOutput } from "./getGame";

interface PlayerResponseData {
    // Player Info
    index?: number;
    human_index?: number;
    username?: string;
    UUID?: string;
    uncapped_xp?: number;

    // All games
    xp?: number;
    played?: number;
    victories?: number;
    first_played?: number;

    deaths?: number; // Excluding Skywars
    kills?: number; // Excluding Murder Mystery and Hide n' Seek

    // Treasure Wars
    final_kills?: number;
    treasure_destroyed?: number;
    prestige?: number;

    // Skywars
    mystery_chests_destroyed?: number;
    ores_mined?: number;
    spells_used?: number;

    // Deathrun
    checkpoints?: number;
    activated?: number;

    // Hide and Seek
    hider_kills?: number;
    seeker_kills?: number;

    // Survival Games
    crates?: number;
    deathmatches?: number;
    cows?: number;

    // Murder Mystery
    coins?: number;
    murders?: number;
    murderer_eliminations?: number;
}

interface CustomPlayerValues {
    win_percentage?: number;
    games_lost?: number;
    xpr?: number; // XP per round
    kpr?: number; // Kills per round
    dpr?: number; // Deaths per round
    chpr?: number; // Checkpoints per round
    cpr?: number; // Coins per round
    kdr?: number; // Kill/Death ratio
    sdr?: number; // SeekerKills/Death ratio
    fdr?: number; // FinalKills/Death ratio
    fpr?: number; // FinalKills per round
    tpr?: number; // Treasures Destroyed per round
    mpr?: number; // Mystery Chests per round
    dmpr?: number; // Deathmatches per round
    crpr?: number; // Crates per round
    copr?: number; // Cows per round
}

var _rawData: PlayerResponseData = {};
export default class ResponseData {
    apiPath: APIPath;
    data: PlayerResponseData;
    game: GameOutput;

    constructor(apiPath: APIPath, responseData: PlayerResponseData) {
        this.apiPath = apiPath;
        this.data = responseData;
        this.game = getGame(this._currentGame());

        this._saveRaw(responseData);
        this._addCustomValues();
    }
    private _saveRaw(responseData: PlayerResponseData) {
        _rawData = responseData;
    }
    private _currentGame(): Game {
        for (let game in API_GAMES) {
            if (this.apiPath.includes(`/${API_GAMES[game]}/`)) {
                return API_GAMES[game];
            }
        }
        return "";
    }
    get rawData(): PlayerResponseData {
        return _rawData;
    }
    private _addCustomValues() {
        let values: CustomPlayerValues = {};
        let rawData = this.rawData;

        // xpr (xp per round)
        if (rawData.xp && rawData.played) {
            values.xpr = rawData.xp / rawData.played;
        }

        // win_percentage, games_lost
        if (rawData.played && rawData.victories) {
            values.win_percentage = parseFloat(
                (rawData.victories / rawData.played).toFixed(4)
            );

            values.games_lost = rawData.played - rawData.victories;
        }

        // kpr (kills per round)
        var kills = rawData.kills ?? rawData.hider_kills ?? rawData.murders;
        if (kills && rawData.played) {
            values.kpr = parseFloat((kills / rawData.played).toFixed(2));
        }

        // dpr (deaths per round)
        if (rawData.deaths && rawData.played) {
            values.dpr = parseFloat(
                (rawData.deaths / rawData.played).toFixed(2)
            );
        }

        // chpr (checkpoints per round)
        if (rawData.checkpoints && rawData.played) {
            values.chpr = parseFloat(
                (rawData.checkpoints / rawData.played).toFixed(2)
            );
        }

        // kdr (kill death raito)
        if (rawData.kills && rawData.deaths) {
            values.kdr = parseFloat(
                (rawData.kills / rawData.deaths).toFixed(2)
            );
        }

        // sdr (seeker kills / death raito)
        if (rawData.seeker_kills && rawData.deaths) {
            values.sdr = parseFloat(
                (rawData.seeker_kills / rawData.deaths).toFixed(2)
            );
        }

        // fdr (final kills / death raito)
        if (rawData.final_kills && rawData.deaths) {
            values.fdr = parseFloat(
                (rawData.final_kills / rawData.deaths).toFixed(2)
            );
        }

        // fpr (final kills per round)
        if (rawData.final_kills && rawData.played) {
            values.fpr = parseFloat(
                (rawData.final_kills / rawData.played).toFixed(2)
            );
        }

        // tpr (treasures per round)
        if (rawData.treasure_destroyed && rawData.played) {
            values.tpr = parseFloat(
                (rawData.treasure_destroyed / rawData.played).toFixed(2)
            );
        }

        // mpr (mystery chests per round)
        if (rawData.mystery_chests_destroyed && rawData.played) {
            values.mpr = parseFloat(
                (rawData.mystery_chests_destroyed / rawData.played).toFixed(2)
            );
        }

        // cpr (coins per round)
        if (rawData.coins && rawData.played) {
            values.cpr = parseFloat(
                (rawData.coins / rawData.played).toFixed(2)
            );
        }

        // dmpr (deathmatches per round)
        if (rawData.deathmatches && rawData.played) {
            values.dmpr = parseFloat(
                (rawData.deathmatches / rawData.played).toFixed(2)
            );
        }

        // crpr (crates per round)
        if (rawData.crates && rawData.played) {
            values.crpr = parseFloat(
                (rawData.crates / rawData.played).toFixed(2)
            );
        }

        // copr (cows per round)
        if (rawData.cows && rawData.played) {
            values.copr = parseFloat(
                (rawData.cows / rawData.played).toFixed(2)
            );
        }

        this.data = { ...this.data, ...values };
    }
}
