import { post } from './network.js';

export function createTeamDB(team) {
    return post("/teams",{
        data:{
            name:team.name,
            coaches:team.coaches,
            players:team.players,
            win:team.win,
            lose: team.lose,
            favorPoints: team.favorPoints,
            againstPoints: team.againstPoints,
            w: team.w,
            points: team.points,
            championshipId: team.championshipId,
        }

    });
}

