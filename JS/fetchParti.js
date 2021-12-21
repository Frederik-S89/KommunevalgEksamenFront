const getPartiURL =  "http://localhost:8080/partier/get";


async function getParti(){
    return fetch(getPartiURL).then(response => response.json());
}

async function callGetParti(){
    const promise = getParti();
    await promise.then(partiMapper);
}

let partiMap = new Map();

function partiMapper(data){
    data.forEach(parti =>{
        partiMap.set(parti.partiId, parti)
    })
}

async function getAllP(){
    await callGetParti();
}
