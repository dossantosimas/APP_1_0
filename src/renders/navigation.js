import { renderClubs, getTeamByParams, getPLayer } from '../renders/teams.js'
import {renderDetailedLeadershipBoard, renderAnnotationsList, renderTriplesList, leadershipBoardPreview} from '../renders/boards.js'
import {renderNewsPreview} from '../renders/news.js'

// formCreateTeam.classList.add('ocultar');
// mainTables.classList.remove('ocultar');
// scorers.classList.remove('ocultar');
// triples.classList.remove('ocultar');

function navigator (){
    if(location.hash.startsWith('#la_liga')){
        return laLigaChampionShip();
    }
    if(location.hash.startsWith('#register')){
        return registro();
    }
    if(location.hash.startsWith('#teams/teamId')){
        return viewClub();
    }
    if(location.hash.startsWith('#teams')){
        return clubes();
    }
    else if(location.hash.startsWith('#home' || '/')) {
        return homePage();
    }
}

const homePage = async ()=>{
    console.log('home');

    formCreateTeam.classList.add('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar');
    HomePage.classList.remove('ocultar');
    newsContainer.classList.remove('ocultar');
    newsContainer.classList.add('card-group');
    clubsContainer.classList.add('ocultar');
    clubsContainer.classList.remove('row');
    divClub1.classList.add('ocultar');
    divClub1.classList.remove('card');
    divClub2.classList.add('ocultar');
    divClub2.classList.remove('row');
    divClub3.classList.add('ocultar');
    divClub3.classList.remove('row');
    clubDetailedContainer.classList.add('ocultar');
    clubDetailedContainer.classList.remove('row');

    leadershipBoardPreview();
    renderNewsPreview();  

}

const registro = ()=>{
    console.log('register');
    
    formCreateTeam.classList.remove('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar');
    HomePage.classList.add('ocultar');
    newsContainer.classList.add('ocultar');
    newsContainer.classList.remove('card-group');
    clubsContainer.classList.add('ocultar');
    clubsContainer.classList.remove('row');
    clubDetailedContainer.classList.add('ocultar');
    clubDetailedContainer.classList.remove('row'); 

}

export const laLigaChampionShip = (name,id)=>{
    console.log(name);
    HomePage.classList.add('ocultar');
    formCreateTeam.classList.add('ocultar');
    mainTables.classList.remove('ocultar');
    scorersContainer.classList.remove('ocultar');
    triplesContainer.classList.remove('ocultar'); 
    newsContainer.classList.remove('ocultar');
    newsContainer.classList.add('card-group');
    clubsContainer.classList.add('ocultar');
    clubsContainer.classList.remove('row');
    clubDetailedContainer.classList.add('ocultar');
    clubDetailedContainer.classList.remove('row');


    renderDetailedLeadershipBoard(id);
    renderAnnotationsList(id);
    renderTriplesList(id);

}

const clubes = ()=>{
    console.log('clubes');
    HomePage.classList.add('ocultar');
    formCreateTeam.classList.add('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar'); 
    newsContainer.classList.add('ocultar');
    newsContainer.classList.remove('card-group');
    clubsContainer.classList.remove('ocultar');
    clubsContainer.classList.add('row');
    clubDetailedContainer.classList.add('ocultar');
    clubDetailedContainer.classList.remove('row');

    renderClubs();
}

const viewClub = ()=>{
    console.log(`Este es la vista de detalle de un club`);
    console.log('clubes');
    HomePage.classList.add('ocultar');
    formCreateTeam.classList.add('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar'); 
    newsContainer.classList.add('ocultar');
    newsContainer.classList.remove('card-group');
    clubsContainer.classList.add('ocultar');
    clubsContainer.classList.remove('row');
    clubDetailedContainer.classList.add('row');
    clubDetailedContainer.classList.remove('ocultar');
    divClub1.classList.remove('ocultar');
    divClub1.classList.add('card');
    divClub2.classList.remove('ocultar');
    divClub2.classList.add('row');
    divClub3.classList.remove('ocultar');
    divClub3.classList.add('row');


    //['#team', 'buscado']
    const [ , param] = location.hash.split(':');
    getTeamByParams(param);
}

window.addEventListener('DOMContentLoaded', navigator, false, homePage());
window.addEventListener('hashchange', navigator, false);

// export default navigator;