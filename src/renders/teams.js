// import { getTeams, getTeamById, getPlayerById } from "../services/teams.services.js";


const renderClubs = ()=>{
	// 
	// const teamsList = getTeams();
	// console.log(teamsList);

	clubsContainer.innerHTML = '';

	championshipListParsed.forEach(team => {
		const teamCard = document.createElement('div')
		const teamName = document.createElement('h4');
		const divName = document.createElement('div');
		const teamLogo = document.createElement('img');

		teamName.innerText = team.teamName;
		teamName.classList.add('text-center');
		teamName.classList.add('text-light');

		if(team.logo){
			teamLogo.setAttribute('src', team.logo);
		} else {
			teamLogo.setAttribute('src', './images/neb-logo.png');
		}

		teamCard.classList.add('card');
		teamCard.classList.add('bg-dark');
		teamCard.classList.add('mx-2');
		teamCard.style.width = '18rem';

		teamLogo.classList.add('card-img-top');

		divName.classList.add('card-body');
		teamName.classList.add('card-text');

		teamCard.addEventListener('click', ()=>{
				location.hash = `#teams/teamId=${team.id}`;
		})

		divName.appendChild(teamName);
		teamCard.appendChild(teamLogo);
		teamCard.appendChild(divName);
		clubsContainer.appendChild(teamCard);
	});
}

const getTeamByQuery = (query) =>{

	coachesSection.innerHTML = '';
	playersSection.innerHTML = '';
	
	// teamData = getTeamById();
	// const { coaches, players} = data; 

	const teamData = championshipListParsed.find(team => team.id == query);
	console.log(`El equipo es ${teamData.teamName}`)

	const coaches = teamData.coaches;
	const players = teamData.players;

	const coachTitle = document.createElement('h2');
	coachTitle.classList.add('texto-blanco');
	coachTitle.innerHTML = 'CUERPO TECNICO';
	coachesSection.appendChild(coachTitle);


	coaches.forEach(coach => {
			const div = document.createElement('div');
			const coachImg = document.createElement('img');
			const divBody = document.createElement('div');
			const coachName = document.createElement('p');

			if(coach.img){
					coachImg.setAttribute('src', coach.img);
			} else {
					coachImg.setAttribute('src', './images/neb-logo.png');
			}

			div.classList.add('card');
			div.style.width = '18rem';
			div.style.background = 'transparent';
			coachImg.classList.add('card-img-top');
			divBody.classList.add('card-body');
			coachName.classList.add('card-text');
			coachName.innerText = coach;

			divBody.appendChild(coachName);
			div.appendChild(coachImg);
			div.appendChild(divBody);
			coachesSection.appendChild(div);

	});

	const playersTitle = document.createElement('h2');
	playersTitle.classList.add('texto-blanco');
	playersTitle.innerHTML = ' JUGADORES';
	coachesSection.appendChild(playersTitle);
	
	players.forEach(player =>{
			const divPlayer = document.createElement('div');
			const playerImg = document.createElement('img');
			const divBody = document.createElement('div');

			const statusList = document.createElement('ul');
			const playerName = document.createElement('li');
			const playerPosition = document.createElement('li');;
			const playerPoints = document.createElement('li');;
			const playerTriples = document.createElement('li');;

			if(player.img){
					playerImg.setAttribute('src', player.img);
			} else {
					playerImg.setAttribute('src', './images/neb-logo.png');
			}

			divPlayer.classList.add('card');
			divPlayer.style.width = '18rem';
			divPlayer.style.background = 'transparent';
			playerImg.classList.add('card-img-top');
			divBody.classList.add('card-body');

			divBody.classList.add('card');
			divBody.style.width = '18rem';
			statusList.classList.add('list-group');
			statusList.classList.add('list-group-flush');
			playerName.classList.add('list-group-item');
			playerPosition.classList.add('list-group-item');
			playerPoints.classList.add('list-group-item');
			playerTriples.classList.add('list-group-item');

			playerName.innerHTML = ` <b> Nombre: </b> <br> ${player.name} ${player.lastname}`;
			playerPosition.innerHTML = `<b> Posición:</b> <br>${player.position}`;
			playerPoints.innerHTML = `<b> Anotaciones en el campeonato: </b> <br>${player.annotations}`;
			playerTriples.innerHTML = `<b> Anotaciones 3 puntos:</b> <br>${player.triples}`

			statusList.appendChild(playerName);
			statusList.appendChild(playerPosition);
			statusList.appendChild(playerPoints);
			statusList.appendChild(playerTriples);

			divBody.appendChild(statusList);
			divPlayer.appendChild(playerImg);
			divPlayer.appendChild(divBody);

			playersSection.appendChild(divPlayer);
	})

	//clubDetailedContainer.appendChild()
}

const getPLayer = (params) =>{
	// const dataPlayer = getPlayerById();
	
}