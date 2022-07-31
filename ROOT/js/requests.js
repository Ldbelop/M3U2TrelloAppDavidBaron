function showAllCards(cards){
    cards.map((card) => console.log(card))
}

axios.get('https://my-json-server.typicode.com/Ldbelop/M3U2TrelloAppDavidBaron/db')
    .then((result) => {showAllCards(result.data.examples)})
