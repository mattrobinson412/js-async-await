const baseURL = "http://deckofcardsapi.com/";
const section = $(".section")[0]

// // #1 //
// async function addCard() {
//     let p1Promise = $.getJSON(`${baseURL}/api/deck/new/shuffle`);
//     let p1 = await p1Promise;
//     let p2 = await $.getJSON(`${baseURL}/api/deck/${p1.deck_id}/draw`);
//     console.log(`${p2.cards[0].value} of ${p2.cards[0].suit}`)
// };
// addCard();

// // #2 //
// async function getTwoCards() {
//     let p1 = await $.getJSON(`${baseURL}/api/deck/new/shuffle/?deck_count=1`);
//     let p2 = await $.getJSON(`${baseURL}/api/deck/${p1.deck_id}/draw/?count=1`);
//     let p3 = await $.getJSON(`${baseURL}/api/deck/${p1.deck_id}/draw/?count=1`);
//     console.log(`${p2.cards[0].value} of ${p2.cards[0].suit} & ${p3.cards[0].value} of ${p3.cards[0].suit}.`)
// };
// getTwoCards();

// #3 //
async function shuffleDeck() {
    let p1 = await $.getJSON(`${baseURL}/api/deck/new/shuffle`);
    let id = p1.deck_id;
    return drawCard(id)
};

async function addCard(id) {
    let p2 = await $.getJSON(`${baseURL}/api/deck/${id}/draw/?count=1`);
    if (p2.remaining === 0) {
        return endDraw()
    }
    else {
        console.log(p2.remaining)
        let card = p2.cards[0];
        return displayCard(card)
    } 
};

async function endDraw() {
    $("body").off();
    let cards = document.querySelectorAll(".card")
    let drawBtn = document.querySelector(".btn-success")
    $(cards).remove()
    $(drawBtn).remove()

    $(section)
        .append(`<button type="button" class="restart btn btn-info px-4">Reshuffle Deck</button>`);
    return reshuffleDeck();
    }

function reshuffleDeck() {
    $("body").on("click", function(e) {
        if (e.target.tagName === "BUTTON") {
            location.reload()
        }});
};

async function displayCard(card) {
    let cardPile = $(".deck")[0]
    $(cardPile).append(`
        <div class="card bg-dark text-white my-4" 
            style="width: 15rem; position: absolute;">
            <img class="card-img" src="${card.images.png}" 
                alt="${card.value} of ${card.suit}">
        </div>`);
};

async function drawCard(id) {
    $("body").on("click", function(e) {
        if (e.target.tagName === 'BUTTON') {
            addCard(id)
        }
    })
}

shuffleDeck();




// function shuffleDeck() {
//     let res = axios.get(`${baseURL}/api/deck/new/shuffle/?deck_count=1`)
//     return drawCard(res);
// };

// function addCard(res) {
//     res.then(p1 => {
//         return axios.get(`${baseURL}/api/deck/${p1.data.deck_id}/draw/?count=1`)
//     })
//     .then(p2 => {
//         let rem = p2.data.remaining
//         endDraw(rem)
//         let card = p2.data.cards[0];
//         return displayCard(card);
//     })
// };

// function displayCard(card) {
//     let cardPile = $(".deck")[0]
//     $(cardPile).append(`
//         <div class="card bg-dark text-white my-4" 
//             style="width: 15rem; position: absolute;">
//             <img class="card-img" src="${card.images.png}" 
//                 alt="${card.value} of ${card.suit}">
//         </div>`);
// };

// function endDraw(rem) {
//     console.log(rem);
//     if (rem === 0) {
//         $("body").off();
//         let cards = document.querySelectorAll(".card")
//         let drawBtn = document.querySelector(".btn-success")
//         $(cards).remove()
//         $(drawBtn).remove()

//         $(section)
//             .append(`<button type="button" class="restart btn btn-info px-4">Reshuffle Deck</button>`)
//         return reshuffleDeck();
//     }
// };

// function reshuffleDeck() {
//     $("body").on("click", function(e) {
//         if (e.target.tagName === "BUTTON") {
//             location.reload()
//         }
//     })
    
// };

// function drawCard(res) {
//     $("body").on("click", function(e) {
//         if (e.target.tagName === "BUTTON") {
//             addCard(res)
//         }
//     })
// };

// shuffleDeck();
