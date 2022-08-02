let idArray = []
let length;

function renderCard(card){
    let template = `<div class="card" >
                        <h1 class="card__title">${card.title}<span id="resPerson">/${card.resPerson}</span></h1>
                        <p class="card__content">${card.content}</p>
                        <span class="card__deadline">${card.deadline}</span>
                    </div>`;
    let column = document.querySelector("#ready-to-start--column")
    column.innerHTML += template;
    length = idArray.push(card.id);
}

let button = document.querySelector("#form--button");

button.addEventListener("click", () => {
    let data = {
        id: idArray[length - 1] + 1,
        title: document.getElementById("task-title").value,
        resPerson: document.getElementById("task-responsible").value,
        deadline: formatDate(document.querySelector("#deadline").value),
        state: 'LISTO PARA INICIAR',
        content: document.querySelector("#task-description").value
    }

    idArray.push(data.id)
    axios.post('https://my-json-server.typicode.com/Ldbelop/M3U2TrelloAppDavidBaron/examples', data)
        .then((response) => {console.log(response);renderCard(response.data)
        console.log("Envío exitoso")})
        .catch((err) => {err})
})


