// import { get } from "./services/network";


// ME TIENE QUE TRAER LAS TRES TABLAS DE CADA CAMPEONATO. TABLA DE POSICIONES, TABLA DE ANOTADORES Y TALA DE TRIPLES.
const getBoards = (params) => {
    return get("/championship", {
        championshipId: params.id,
    });
}
