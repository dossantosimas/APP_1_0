import {getChampionships} from "../services/championship.services.js"
import {laLigaChampionShip} from "../renders/navigation.js"


export const renderNavBarList = async()=>{

    const championships = await getChampionships()
    // console.log(championships)
    
    if(!championships){
        //no hay ningun campeonato disponible
        const listItem = document.createElement('li');
        listItem.innerText = 'no hay ningun campeonato disponible';
        navbarList.appendChild(listItem);
    }
    championships.forEach(championship => {
        const listItem = document.createElement('li');
        const linkChampionship = document.createElement('a');

        linkChampionship.classList.add('dropdown-item');
        linkChampionship.setAttribute('href', `#${championship.name}`);
        linkChampionship.innerHTML = `${championship.name}`

        listItem.appendChild(linkChampionship);
        navbarList.appendChild(listItem);
        // console.log(championship.id);
        listItem.addEventListener('click', ()=>{
            laLigaChampionShip(championship.name, championship.id);
        })
    });
}

renderNavBarList();