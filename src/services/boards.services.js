import { get } from "./network.js";


// ME TIENE QUE TRAER LAS TRES TABLAS DE CADA CAMPEONATO. TABLA DE POSICIONES, TABLA DE ANOTADORES Y TALA DE TRIPLES.
export const getBoards = (id) => {
    return get(`/championships/${id}`);
}
