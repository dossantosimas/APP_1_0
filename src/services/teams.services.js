import { get, post, http } from './network.js';


export function getTeams() {
    return get("/teams");
}

export function getTeamById(id) {
    return get("/teams",{
        params: {
            id: id
        }
    });
}

export function createTeamDB(body) {
    return http.post("/teams",{
        name: body.name,
        player: body.player,
        coach: body.coach,
        winnerGames: body.winnerGames,
        losedGames: body.losedGames,
        WGames: body.WGames,
        favorPoints: body.favorPoints,
        againstPoints: body.againstPoints,
        points: body.points,
        championshipId:body.championshipId,
        players: body.players,
        Coach: body.Coach

    });
}



// export const getPLayerById = ()=>
export function getPlayerById(id){
    return get("/players", {
        params: {
            id: id
        }
    })
}
