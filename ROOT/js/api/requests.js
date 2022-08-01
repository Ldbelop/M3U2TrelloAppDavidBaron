const API_URL = "https://my-json-server.typicode.com/Ldbelop/M3U2TrelloAppDavidBaron/db";

function showAllCards(cards){
    cards.map((card) => {
        renderCard(card)
    })
}

let promise = axios.get(API_URL)
promise.then((result) => {showAllCards(result.data.examples)}).catch((err) => console.log(err))


