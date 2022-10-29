const championshipListMatches = JSON.parse(localStorage.getItem(KEY));


const emparejamiento = () =>{
    for (let i = 0; i < championshipListMatches.length; i++) {
        for (let j = 0; j < championshipListMatches.length; j++) {
            if (championshipListMatches[i] != championshipListMatches[j]){
             console.log(`Equipo ${championshipListMatches[i].teamName} juega contra ${championshipListMatches[j].teamName}`);
            }
            
        }
        
    }
    
}

