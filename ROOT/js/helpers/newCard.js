function renderCard(card){
    let template = `<div class="card">
                        <h1 class="card__title">${card.title}<span id="resPerson">/${card.resPerson}</span></h1>
                        <p class="card__content">${card.content}</p>
                        <span class="card__deadline">${card.deadline}</span>
                        <h1 class="card__state">${card.state}</h1>
                    </div>`;
    let column = document.querySelector("#ready-to-start--column")
    column.innerHTML += template;
}

let button = document.querySelector("#form--button");

button.addEventListener("click", () => {
    let data = {
        title: document.getElementById("task-title").value,
        resPerson: document.getElementById("task-responsible").value,
        deadline: formatDate(document.querySelector("#deadline").value),
        state: 'LISTO PARA INICIAR',
        content: document.querySelector("#task-description").value
    }

    axios.post('https://my-json-server.typicode.com/Ldbelop/M3U2TrelloAppDavidBaron/examples', data)
        .then((response) => {renderCard(response.data)
        console.log("Envío exitoso")})
        .catch((err) => {err})
})


