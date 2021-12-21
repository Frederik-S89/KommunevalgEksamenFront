async function wait456Fetch(){
    await getAllP();
    await  getAllK();

    /*fillPartiDropDown();*/

}
wait456Fetch();
const savePartiURL ="http://localhost:8080/partier/save";
const select = document.getElementById("PartiList");
/*
function fillPartiDropDown() {

    for (let i of partiMap.keys()) {
        const option = document.createElement("option")
        option.innerHTML = partiMap.get(i).name;
        option.value = partiMap.get(i).PartiId;
        select.appendChild(option);
    }
}*/
    let postRequestParti={

        method: "POST",
        headers: {
            "content-type": "application/json"
        }, body:""
    }

    let partiJson = {
        "partiId": "",
        "partiNavn": "",
    }

    function createParti(){
        let inputValue1 = document.getElementById("OpretPartiNavn");


        partiJson.partiNavn =inputValue1.value;
        console.log(inputValue1.value)

        postRequestParti.body =JSON.stringify(partiJson)
        fetch(savePartiURL, postRequestParti).catch((error)=> console.log());
    }

const OpretPartiKnap=document.querySelector(".OpretPartiKnap");
OpretPartiKnap.addEventListener("click", createParti);