//JAVASCRIPT PARA EL FORMULARIO DE CREACION DE EQUIPO

//teams = [];
let classPLayer = 0;


const playerFormat = ()=>{
    classPLayer ++;

    //NOMBRE DEL JUGADOR
    const div2 = document.createElement('div');
    div2.classList.add('col-sm-5');

    const div3 = document.createElement('div');
    div3.classList.add('mb-3');

    const name = document.createElement('input');
    name.placeholder = 'nombre del jugador';
    name.classList.add('player'+classPLayer);
    name.classList.add('form-control');

    div3.appendChild(name);
    div2.appendChild(div3);


    //APELLIDO DEL JUGADOR
    const div4 = document.createElement('div');
    div4.classList.add('col-sm-5');

    const div5 = document.createElement('div');
    div5.classList.add('mb-3');

    const lastName = document.createElement('input');
    lastName.placeholder = 'apellido ';
    lastName.classList.add('player'+classPLayer);
    lastName.classList.add('form-control');

    div5.appendChild(lastName);
    div4.appendChild(div5);


    //SELECCIONADOR DE LA POSICION DEL JUGADOR
    const divPosition = document.createElement('div');
    divPosition.classList.add('col-sm-2')

    const selectPosition = document.createElement('select');
    selectPosition.classList.add('form-select');
    selectPosition.classList.add('player'+classPLayer);
    selectPosition.setAttribute('aria-label', 'Default');

    const optionSelectedDefault = document.createElement('option');
    optionSelectedDefault.text = 'posición';
    optionSelectedDefault.value = 'undefined';
    optionSelectedDefault.defaultSelected = true;

    const position1 = document.createElement('option');
    position1.text = 'Base';
    position1.value = 'Base'; 

    const position2 = document.createElement('option');
    position2.text = 'Escolta';
    position2.value = 'Escolta'; 

    const position3 = document.createElement('option');
    position3.text = 'Alero';
    position3.value = 'Alero'; 

    const position4 = document.createElement('option');
    position4.text = 'Pivot';
    position4.value = 'Pivot'; 

    const position5 = document.createElement('option');
    position5.text = 'Ala-pivot';
    position5.value = 'Ala-pivot'; 


    selectPosition.appendChild(optionSelectedDefault);
    selectPosition.appendChild(position1);
    selectPosition.appendChild(position2);
    selectPosition.appendChild(position3);
    selectPosition.appendChild(position4);
    selectPosition.appendChild(position5);
    divPosition.appendChild(selectPosition);

    playersName.appendChild(div2);
    playersName.appendChild(div4);
    playersName.appendChild(divPosition);

}

const principalForm = ()=>{
    for (let i = 1; i <= 7; i++) {
        playerFormat();
    }
}

cancelForm.addEventListener('click', ()=>{
    hide(formCreateTeam)
    show(showForm)
})

addPlayer.addEventListener('click', (e)=>{
    e.preventDefault();
    playerFormat();
})

const createPlayers = ()=>{
    let players = [];
    for (let i = 1; i <= classPLayer; i++) {
        data = document.querySelectorAll(`.player${i}`);
        let dataPlayer = {
            name: data[0].value,
            lastname: data[1].value,
            number: data[2].value,
            position: data[3].value
        }
        players.push(dataPlayer);
    }
    return players;
}

const createTeam = () => {
    //createPlayers();
    let players = [];
    for (let i = 1; i <= classPLayer; i++) {
        let data = document.querySelectorAll(`.player${i}`);
        let dataPlayer = {
            name: data[0].value,
            lastname: data[1].value,
            position: data[2].value,
            annotations:'',
            triples:''
        }
        players.push(dataPlayer);
    }

    let coaches = document.querySelectorAll('.coach');
    let coachesNames = [];
    coaches.forEach(coach => {
        coachesNames.push(coach.value)
    });

    let team = {
        teamName: teamNameForm.value,
        coaches: coachesNames,
        players: players,
        win: '',
        lose: '',
        favorPoints:'',
        againstPoints:'',
        w:'',
        points:''
    }

    upsertTeam(team);
}

createTeamBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    createTeam();
    blockField('input');
    blockField('select');

});

principalForm();