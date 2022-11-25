import { get } from './network.js';

export function getChampionships() {
    return get("/championships");
}

export function getChampionship(id) {
    return get("/championship",{
        params:{
            id: id
        }
    })
}