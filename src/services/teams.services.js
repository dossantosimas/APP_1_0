import { get } from './network.js';

export function getTeams() {
    return get("/teams");
}

export function getTeamById(id) {
    return get("/teams/", {
        params: {
            id: id
        }
    })
}

// export const getPLayerById = ()=>
export function getPlayerById(){
    return get("/players", {
        params: {
            id: id
        }
    })
}
