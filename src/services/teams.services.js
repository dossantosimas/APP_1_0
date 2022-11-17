// import { get } from './network.js';

const getTeams = () => {
    return get("/teams");
}

const getTeamById = ()=>{
    return get("/teams", {
        id: params.id
    })
}
// export const getPLayerById
const getPlayerById = ()=>{
    return get("/players", {
        id: params.id,
    })
}
