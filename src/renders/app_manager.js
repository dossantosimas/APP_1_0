const KEY = 'championshipList_V1';

const championshipList = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

const _saveTeam = (newTeam) => {
    let newChampionshipList = [...championshipList(), newTeam];
    localStorage.setItem(KEY, JSON.stringify(newChampionshipList));
};


const deleteTeam = (id) => {
    let newChampionshipList = championshipList().filter(t => t.id != id);
    localStorage.setItem(KEY, JSON.stringify(newChampionshipList));
    //product.innerHTML = '';
    //RenderTeams(newChampionshipList);
};

const upsertTeam = (team) => {
    list = championshipList();
    if(!team.id) {
        team.id = list.length +1;
        return _saveTeam(team)
    }

    //EDITAR EQUIPOS EXISTENTES

    localStorage.setItem(KEY, JSON.stringify(newChampionshipList));
}

