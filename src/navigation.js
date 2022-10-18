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
    else if(location.hash.startsWith('#home')) {
        homePage();
    }
}

const homePage = ()=>{
    console.log('home');

    formCreateTeam.classList.remove('ocultar');
    mainTables.classList.add('ocultar');
    scorersContainer.classList.add('ocultar');
    triplesContainer.classList.add('ocultar');  
}

const laLigaChampionShip = ()=>{
    console.log('la Liga');

    formCreateTeam.classList.add('ocultar');
    mainTables.classList.remove('ocultar');
    scorersContainer.classList.remove('ocultar');
    triplesContainer.classList.remove('ocultar'); 

    renderLeadershipBoard();
    renderAnnotationsList();
    renderTriplesList();

}



window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);