function showAllCards(cards){
    cards.map((card) => console.log(card))
}

function renderCard(card){
    let column = document.querySelector("#ready-to-start--column")
    column.innerHTML += 
                `<div class="card">
                    <h1>${card.title}/${card.resPerson}</h1>
                    <p>${card.content}</p>
                    <span>${card.deadline}</span>
                    <h1>${card.state}</h1>
                </div>`
}

axios.get('https://my-json-server.typicode.com/Ldbelop/M3U2TrelloAppDavidBaron/db')
    .then((result) => {showAllCards(result.data.examples)})
