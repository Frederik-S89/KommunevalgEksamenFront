async function wait1234Fetch(){
  await getAllK();
  await getAllP();

fillKandiDropDown();

}

const saveKandidatURL ="http://localhost:8080/kandidater/save";
const select = document.getElementById("PartiNavn");

function fillKandiDropDown() {

  for (let i of partiMap.keys()) {
    const option = document.createElement("option")
    option.innerHTML = partiMap.get(i).partiNavn;
    option.value = partiMap.get(i).partiId;
    select.appendChild(option);
  }
}

let postRequestKandidat={

  method: "POST",
  headers: {
    "content-type": "application/json"
  }, body:""
}

let kandidatJson = {
  "kandidatId": "",
  "kandidatNavn": "",
  "partier": ""
}

function createKandidat(){
  let inputValue1 = document.getElementById("KandidatNavn");


  kandidatJson.kandidatNavn =inputValue1.value;
  kandidatJson.partier={partiId:select.value}
  console.log(inputValue1.value)
  console.log(JSON.stringify(kandidatJson))
  postRequestKandidat.body =JSON.stringify(kandidatJson)
  fetch(saveKandidatURL, postRequestKandidat).catch((error)=> console.log(error));

}

const OpretKandidatNavn = document.getElementById("OpretKandidatNavn")
OpretKandidatNavn.addEventListener("click", createKandidat)
wait1234Fetch();