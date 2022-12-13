import { renderClubs, getTeamByParams, getPLayer } from '../renders/teams.js'
import {renderDetailedLeadershipBoard, renderAnnotationsList, renderTriplesList, leadershipBoardPreview} from '../renders/boards.js'
import {renderNewsPreview, getNewsByParams, renderPreviewSideNews, getAllNews} from '../renders/news.js'
// import {principalForm} from '../renders/registrationForm'

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
    if(location.hash.startsWith('#news/newsId')){
        return viewNews();
    }
    if(location.hash.startsWith('#news')){
        return news();
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
    newsDetailedContainer.classList.add('ocultar');
    newsDetailedContainer.classList.remove('row');
    newsPageContainer.classList.add('ocultar');
    newsContainerBody.classList.remove('row');

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
    newSectionContainer.classList.add('ocultar');
    newsDetailedContainer.classList.remove('row');
    newsPageContainer.classList.add('ocultar');
    newsContainerBody.classList.remove('row'); 
    // principalForm();
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
    newSectionContainer.classList.add('ocultar');
    newsDetailedContainer.classList.remove('row');
    newsPageContainer.classList.add('ocultar');
    newsContainerBody.classList.remove('row');


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
    newSectionContainer.classList.add('ocultar');
    newsDetailedContainer.classList.remove('row');
    newsPageContainer.classList.add('ocultar');
    newsContainerBody.classList.remove('row');

    renderClubs();
}

const viewClub = ()=>{
    console.log(`Este es la vista de detalle de un club`);

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
    newSectionContainer.classList.add('ocultar');
    newsDetailedContainer.classList.remove('row');
    newsPageContainer.classList.add('ocultar');
    newsContainerBody.classList.remove('row');


    //['#team', 'buscado']
    // const [ , param] = location.hash.split(':');
    // getTeamByParams(param);
}

const viewNews = (id)=>{
    formCreateTeam.classList.add('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar');
    HomePage.classList.add('ocultar');
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
    newSectionContainer.classList.remove('ocultar');
    newsDetailedContainer.classList.add('row');
    newsPageContainer.classList.add('ocultar');
    newsContainerBody.classList.remove('row');

    const [ , param] = location.hash.split(':');
    getNewsByParams(param);
    renderPreviewSideNews(newsSideContainer,newsDetailedContainer);
}

const news =()=>{
    formCreateTeam.classList.add('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar');
    HomePage.classList.add('ocultar');
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
    newSectionContainer.classList.add('ocultar');
    newsDetailedContainer.classList.remove('row');
    newsPageContainer.classList.remove('ocultar');
    newsContainerBody.classList.add('row');

    getAllNews();
    renderPreviewSideNews(newsSideContainerPrincipal, newSectionContainer);
}

window.addEventListener('DOMContentLoaded', navigator, false, homePage());
window.addEventListener('hashchange', navigator, false);

// export default navigator;