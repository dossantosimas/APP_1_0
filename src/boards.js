//RENDERIZAR EN EL CONTENEDOR positionBoardContainer

let number = 1;



championshipListParsed = JSON.parse(localStorage.getItem('championshipList_V1'))
//console.log(championshipListParsed)

//FUNCION DE ORDENAR POR PUNTOS A LOS EQUIPOS DEL CAMPEONATO
// const orderChampionshipList = ()=>{

//HARCODEANDO LOS EQUIPOS PARA HACER PRUEBAS DE LA FUNCION
//     championshipListParsed[0].points = 1;
//     championshipListParsed[1].points = 3;
//     championshipListParsed[2].points = 2;
    
//     const newChampionshipList = championshipListParsed.sort((a,b)=> b - a);
    
//     console.log(newChampionshipList)
//     renderLeadershipBoard(newChampionshipList)
// }

const renderLeadershipBoard = ()=>{
        //HARDCODEADO DE PRUEBA
    // championshipListParsed[0].points = 1;
    // championshipListParsed[1].points = 3;
    // championshipListParsed[2].points = 2;
    
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
    scorersTable.innerHTML = '';
    let pos = 1;
    let allPlayers = [];
    championshipListParsed.forEach(team => {
        allPlayers.push(team.players)
    });
    scorers = allPlayers.flat();

    //HARDCODEADO DE PRUEBA
    // scorers[20].annotations = 30

    scorers.sort((a,b)=> b.annotations - a.annotations);
    //console.log(scorers);

    for (let i = 0; i < 5; i++) {

        const tr = document.createElement('tr');
        const scorerPosition = document.createElement('th');
        const scorerName = document.createElement('td');
        const scorerPoints = document.createElement('td')

        scorerPosition.classList.add('row');
        scorerPoints.classList.add('text-center');
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

    triplesTable.innerHTML = '';
    let triplespos = 1;
    let allPlayers = [];
    championshipListParsed.forEach(team => {
        allPlayers.push(team.players)
    });
    scorers = allPlayers.flat();
    
    //HARDCODEADO DE PRUEBA
    // scorers[1].triples = 50

    scorers.sort((a,b)=> b.triples - a.triples);
    //console.log(scorers);

    for (let i = 0; i < 5; i++) {

        const tr = document.createElement('tr');
        const scorerPosition = document.createElement('th');
        const scorerName = document.createElement('td');
        const scorerPoints = document.createElement('td')

        scorerPosition.classList.add('row');
        scorerPoints.classList.add('text-center');
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

// renderLeadershipBoard();
// renderAnnotationsList();
// renderTriplesList();
