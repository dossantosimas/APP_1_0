// formCreateTeam.classList.add('ocultar');
// mainTables.classList.remove('ocultar');
// scorers.classList.remove('ocultar');
// triples.classList.remove('ocultar');

const navigator = ()=>{
    if(location.hash.startsWith('#la_liga')){
        laLigaChampionShip();
    }
    if(location.hash.startsWith('#segunda')){
        segundaChampionShip();
    }
    if(location.hash.startsWith('#register')){
        registro();
    }
    if(location.hash.startsWith('#teams')){
        clubes();
    }
    if(location.hash.startsWith('#teams/team?id=')){
        viewClub();
    }
    else if(location.hash.startsWith('#home' || '')) {
        homePage();
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
    clubDetailedContainer.classList.add('ocultar');
    clubDetailedContainer.classList.remove('row');

    // const todos = await getTodos();

    // console.log(todos);

    leadershipBoardPreview();  

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

const laLigaChampionShip = ()=>{
    console.log('la Liga');
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


    renderDetailedLeadershipBoard();
    renderAnnotationsList();
    renderTriplesList();

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


    //['#team', 'buscado']
    const [ , query] = location.hash.split('=');
    getTeamByQuery(query);
}


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);