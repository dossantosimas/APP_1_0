import { get } from './network.js';

export function getTeams() {
    return get("/teams");
}

export function getTeamById() {
    return get("/teams", {
        id: params.id
    })
}

// export const getPLayerById = ()=>
export function getPlayerById(){
    return get("/players", {
        id: params.id,
    })
}
