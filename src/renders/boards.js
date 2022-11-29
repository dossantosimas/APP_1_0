//RENDERIZAR EN EL CONTENEDOR positionBoardContainer

import {getBoards} from "../services/boards.services.js";
import {getPlayers} from "../services/player.services.js"
import {getChampionships} from "../services/championship.services.js"
import { getTeamById} from "../services/teams.services.js";
import { getTeamByParams } from "./teams.js";

let number = 1;

// championshipListParsed = JSON.parse(localStorage.getItem('championshipList_V1'))

export const leadershipBoardPreview = async()=>{
    homeTables.innerHTML='';
    homeTables.innerHTML= `
    <div class="col-sm-8">
    <h4 class="text-light">
      Torneos
    </h4>
  </div>
    `

    const championshipsList = await getChampionships();
    console.log(championshipsList)

    championshipsList.forEach(championship => {
        console.log(championship.name)
        const cabezalDeTabla = document.createElement('div');
        const article = document.createElement('article');
        const divTitle = document.createElement('div');
        const titleTable = document.createElement('h5');

        divTitle.classList.add('col-sm-8');
        titleTable.classList.add('text-light');
        titleTable.innerText = championship.name;

        divTitle.appendChild(titleTable);
        article.appendChild(divTitle);
        cabezalDeTabla.appendChild(article);

        const divTable = document.createElement('div');
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const position = document.createElement('th');
        const equipo = document.createElement('th');
        const win = document.createElement('th');
        const lose = document.createElement('th');
        const w = document.createElement('th');
        const favor = document.createElement('th');
        const against = document.createElement('th');
        const points = document.createElement('th');
        const body = document.createElement('tbody');

        divTable.classList.add('col-sm-8');

        table.classList.add('table');
        table.classList.add('table-striped');
        table.classList.add('table-hover');
        table.classList.add('mb-5');
        
        thead.classList.add('table-dark');

        body.classList.add('table-light')

        position.classList.add('text-center');
        position.setAttribute('scope','col');
        position.innerText = 'POS';

        equipo.classList.add('text-center');
        equipo.setAttribute('scope','col');
        equipo.innerText = 'Equipo'

        win.classList.add('text-center');
        win.setAttribute('scope','col');
        win.innerText = 'G';

        lose.classList.add('text-center');
        lose.setAttribute('scope','col');
        lose.innerText = 'P';

        w.classList.add('text-center');
        w.setAttribute('scope','col');
        w.innerText = 'W';

        favor.classList.add('text-center');
        favor.setAttribute('scope','col');
        favor.innerText = '+';

        against.classList.add('text-center');
        against.setAttribute('scope','col');
        against.innerText = '-';

        points.classList.add('text-center');
        points.setAttribute('scope','col');
        points.innerText = 'ptos';

        // cabezalDeTabla.innerHTML = `
        //     <!-- FECHAS PROXIMAMENTE -->
        //     <div class="row">
        //     <article class="col-sm-12">
        //         <div class="row border-bottom">
        //             <h4 class="letra-blanco">
        //                 Fechas la Liga
        //             </h4>
        //         </div>
        //         <div class="row border-bottom bg-light">
        //             <h4 class="text-center">
        //                 Proximanente
        //             </h4>
        //         </div>
        //     </article>
        //     </div>
        // </div>
        // `;
        tr.appendChild(position);
        tr.appendChild(equipo);
        tr.appendChild(win);
        tr.appendChild(lose);
        tr.appendChild(w);
        tr.appendChild(favor);
        tr.appendChild(against);
        tr.appendChild(points);
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(body);
        divTable.appendChild(table);
        cabezalDeTabla.appendChild(divTable);
        homeTables.appendChild(cabezalDeTabla);

        const newChampionshipList = championship.Teams;
        newChampionshipList.sort((a,b)=> b.points - a.points);
        // console.log(newChampionshipList);
    

        let pos = 1;
    
        for (let i = 0; i < 3; i++) {
            const tr = document.createElement('tr');
            const position = document.createElement('th');
            const teamName = document.createElement('td');
            const win = document.createElement('td');
            const lose = document.createElement('td');
            const w = document.createElement('td');
            const favorPoints = document.createElement('td');
            const againstPoints = document.createElement('td');
            const points = document.createElement('td');
    
            //position.classList.add('row');
            position.classList.add('text-center');
            win.classList.add('text-center');
            lose.classList.add('text-center');
            w.classList.add('text-center');
            favorPoints.classList.add('text-center');
            againstPoints.classList.add('text-center');
            points.classList.add('text-center');
    
            position.innerText = pos++;
            teamName.innerText = newChampionshipList[i].name;
            win.innerText = newChampionshipList[i].winnerGames;
            lose.innerText = newChampionshipList[i].losedGames;
            w.innerText = newChampionshipList[i].WGames;
            favorPoints.innerText = newChampionshipList[i].favorPoints;
            againstPoints.innerText = newChampionshipList[i].againstPoints;
            points.innerText = newChampionshipList[i].points;
    
            tr.appendChild(position);
            tr.appendChild(teamName);
            tr.appendChild(win);
            tr.appendChild(lose);
            tr.appendChild(w);
            tr.appendChild(favorPoints);
            tr.appendChild(againstPoints);
            tr.appendChild(points);

            tr.addEventListener('click',()=>{
                getTeamByParams(newChampionshipList[i].id);
                location.hash = `#teams/teamId:${newChampionshipList[i].id}`
            })
    
            body.appendChild(tr);
            // HomePage.appendChild(body);
        }
    });
}


const renderGeneralLeadershipBoard = (container)=>{

    // const {championshipList} = getBoards();
    const newChampionshipList = championshipListParsed.sort((a,b)=> b.points - a.points);
    // console.log(newChampionshipList)

    newChampionshipList.forEach(team => {

        const tr = document.createElement('tr');
        const position = document.createElement('th');
        const teamName = document.createElement('td');
        const points = document.createElement('td');

        //position.classList.add('row');
        position.classList.add('text-center');
        points.classList.add('text-center');

        position.innerText = number++;
        teamName.innerText = team.teamName;
        points.innerText = team.points;

        tr.appendChild(position);
        tr.appendChild(teamName);
        tr.appendChild(points);

        container.appendChild(tr);
        });
}


export const renderDetailedLeadershipBoard = async(id)=>{
    
    positionBoardContainer.innerHTML = "";
    let number = 1;
    
    const championship = await getBoards(id);
    // console.log(championship)
    const Championship = championship.find(item => item.id == id);

    // console.log('el campeonato es:');
    // console.log(Championship.name);

    const newChampionshipList = Championship.Teams.sort((a,b)=> b.points - a.points);


    newChampionshipList.forEach(team => {

        const tr = document.createElement('tr');
        const position = document.createElement('th');
        const teamName = document.createElement('td');
        const win = document.createElement('td');
        const lose = document.createElement('td');
        const w = document.createElement('td');
        const favorPoints = document.createElement('td');
        const againstPoints = document.createElement('td');
        const points = document.createElement('td');

        //position.classList.add('row');
        position.classList.add('text-center');
        win.classList.add('text-center');
        lose.classList.add('text-center');
        w.classList.add('text-center');
        favorPoints.classList.add('text-center');
        againstPoints.classList.add('text-center');
        points.classList.add('text-center');

        position.innerText = number++;
        teamName.innerText = team.name;
        win.innerText = team.winnerGames;
        lose.innerText = team.losedGames;
        w.innerText = team.WGames;
        favorPoints.innerText = team.favorPoints;
        againstPoints.innerText = team.againstPoints;
        points.innerText = team.points;

        tr.appendChild(position);
        tr.appendChild(teamName);
        tr.appendChild(win);
        tr.appendChild(lose);
        tr.appendChild(w);
        tr.appendChild(favorPoints);
        tr.appendChild(againstPoints);
        tr.appendChild(points);

        positionBoardContainer.appendChild(tr);
    });

}

export const renderAnnotationsList = async(id)=>{

    scorersTable.innerHTML = '';
    let pos = 1;

    const allPlayers = await getPlayers();
    // console.log(allPlayers);

    const players = allPlayers.filter(player=> player.team.championshipId == id)
    // console.log(players);
    players.sort((a,b)=> b.annotations - a.annotations);


    for (let i = 0; i < 5; i++) {

        const tr = document.createElement('tr');
        const scorerPosition = document.createElement('th');
        const scorerName = document.createElement('td');
        const scorerPoints = document.createElement('td')

        //scorerPosition.classList.add('row');
        scorerPosition.classList.add('text-center');
        scorerPoints.classList.add('text-center');
        
        scorerPosition.innerText = pos++;
        scorerName.innerText = `${players[i].name} ${players[i].lastName}`;
        scorerPoints.innerText = players[i].annotations;

        tr.appendChild(scorerPosition);
        tr.appendChild(scorerName);
        tr.appendChild(scorerPoints);

        scorersTable.appendChild(tr);

        
    }
}

export const renderTriplesList = async(id)=>{
    // const {triplesTable} = getBoards();

    triplesTable.innerHTML = '';
    let triplespos = 1;
    const allPlayers = await getPlayers();
    // console.log(allPlayers);
    const players = allPlayers.filter(player=> player.team.championshipId == id)

    players.sort((a,b)=> b.triples - a.triples);
    //console.log(scorers);

    for (let i = 0; i < 5; i++) {

        const tr = document.createElement('tr');
        const scorerPosition = document.createElement('th');
        const scorerName = document.createElement('td');
        const scorerPoints = document.createElement('td')

        //scorerPosition.classList.add('row');
        scorerPosition.classList.add('text-center');
        scorerPoints.classList.add('text-center');
        
        scorerPosition.innerText = triplespos++;
        scorerName.innerText = `${players[i].name} ${players[i].lastName}`;
        scorerPoints.innerText = players[i].triples;

        tr.appendChild(scorerPosition);
        tr.appendChild(scorerName);
        tr.appendChild(scorerPoints);

        triplesTable.appendChild(tr);

        //console.log(scorers[i].name);
        
    }
}

// leadershipBoardPreview()
// renderLeadershipBoard();
// renderAnnotationsList();
// renderTriplesList();
