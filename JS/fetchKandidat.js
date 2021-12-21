const getKandidatURL =  "http://localhost:8080/kandidater/get";


async function getKandidat(){
    return fetch(getKandidatURL).then(response => response.json());
}

async function callGetKandidat(){
    const promise = getKandidat();
    await promise.then(kandidatMapper);
}

let kandidatMap = new Map();

function kandidatMapper(data){
    data.forEach(kandidat =>{
        kandidatMap.set(kandidat.kandidatId, kandidat)
    })
}

async function getAllK(){
    await callGetKandidat();
}
