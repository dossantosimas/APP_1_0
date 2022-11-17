//RENDERIZAR EN EL CONTENEDOR positionBoardContainer

// import {getBoards} from "../services/boards.services";

let number = 1;

championshipListParsed = JSON.parse(localStorage.getItem('championshipList_V1'))

const leadershipBoardPreview = ()=>{

    // const {championshipList} = getBoards();

    const newChampionshipList = championshipListParsed.sort((a,b)=> b.points - a.points);
    console.log(newChampionshipList);

    tablePreview1.innerHTML = '';
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
        teamName.innerText = newChampionshipList[i].teamName;
        win.innerText = newChampionshipList[i].win;
        lose.innerText = newChampionshipList[i].lose;
        w.innerText = newChampionshipList[i].w;
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

        tablePreview1.appendChild(tr);
        
    }
}


const renderGeneralLeadershipBoard = (container)=>{

    // const {championshipList} = getBoards();
    const newChampionshipList = championshipListParsed.sort((a,b)=> b.points - a.points);
    console.log(newChampionshipList)

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


const renderDetailedLeadershipBoard = ()=>{
    
    positionBoardContainer.innerHTML = "";
    let number = 1;
    
    // const {championshipList} = getBoards();
    const newChampionshipList = championshipListParsed.sort((a,b)=> b.points - a.points);
    
    console.log(newChampionshipList)

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
        teamName.innerText = team.teamName;
        win.innerText = team.win;
        lose.innerText = team.lose;
        w.innerText = team.w;
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

const renderAnnotationsList = ()=>{
    // const {scorersTable} = getBoards();

    scorersTable.innerHTML = '';
    let pos = 1;
    let allPlayers = [];
    championshipListParsed.forEach(team => {
        allPlayers.push(team.players)
    });
    scorers = allPlayers.flat();

    scorers.sort((a,b)=> b.annotations - a.annotations);
    //console.log(scorers);

    for (let i = 0; i < 5; i++) {

        const tr = document.createElement('tr');
        const scorerPosition = document.createElement('th');
        const scorerName = document.createElement('td');
        const scorerPoints = document.createElement('td')

        //scorerPosition.classList.add('row');
        scorerPosition.classList.add('text-center');
        scorerPoints.classList.add('text-center');
        
        scorerPosition.innerText = pos++;
        scorerName.innerText = `${scorers[i].name} ${scorers[i].lastname}`;
        scorerPoints.innerText = scorers[i].annotations;

        tr.appendChild(scorerPosition);
        tr.appendChild(scorerName);
        tr.appendChild(scorerPoints);

        scorersTable.appendChild(tr);

        //console.log(scorers[i].name);
        
    }
}

const renderTriplesList = ()=>{
    // const {triplesTable} = getBoards();

    triplesTable.innerHTML = '';
    let triplespos = 1;
    let allPlayers = [];
    championshipListParsed.forEach(team => {
        allPlayers.push(team.players)
    });
    scorers = allPlayers.flat();

    scorers.sort((a,b)=> b.triples - a.triples);
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
        scorerName.innerText = `${scorers[i].name} ${scorers[i].lastname}`;
        scorerPoints.innerText = scorers[i].triples;

        tr.appendChild(scorerPosition);
        tr.appendChild(scorerName);
        tr.appendChild(scorerPoints);

        triplesTable.appendChild(tr);

        //console.log(scorers[i].name);
        
    }
}

leadershipBoardPreview()
// renderLeadershipBoard();
// renderAnnotationsList();
// renderTriplesList();
