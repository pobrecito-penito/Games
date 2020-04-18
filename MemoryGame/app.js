let container = document.querySelector('#container');
let app = document.querySelector('#app');
let result = document.querySelector('#h');
let match = document.querySelector('#match');
let hclicks = document.querySelector('#clicks');
let newGame = document.querySelector('#new-game');

const images = [
    {
        id: 'c0',
        name: "Dzunica",
        src: "/images/dzunica.jpg"
    },
    {
        id: 'c1',
        name: "Dzunica",
        src: "/images/dzunica.jpg"
    },
    {
        id: 'c2',
        name: "Mackili",
        src: "/images/mackili.jpg"
    },
    {
        id: 'c3',
        name: "Mackili",
        src: "../images/mackili.jpg"
    },
    {
        id: 'c4',
        name: "Kacki",
        src: "../images/kacki.jpg"
    },
    {
        id: 'c5',
        name: "Kacki",
        src: "../images/kacki.jpg"
    },
    {
        id: 'c6',
        name: "Meki",
        src: "../images/meki.jpg"
    },
    {
        id: 'c7',
        name: "Meki",
        src: "../images/meki.jpg"
    },
    {
        id: 'c8',
        name: "Pobrecito",
        src: "../images/pobrecito.jpg"
    },
    {
        id: 'c9',
        name: "Pobrecito",
        src: "../images/pobrecito.jpg"
    },
    {
        id: 'c10',
        name: "Sanelica",
        src: "../images/sanelica.jpg"
    },
    {
        id: 'c11',
        name: "Sanelica",
        src: "../images/sanelica.jpg"
    }
]

images.sort(() => 0.5 - Math.random());


// BOARD //

let chosenCards = [];
let pairs = [];
let clicks = 0;

const Board = (images) => {
    let div = document.createElement('div');
    div.id = "board";

    images.forEach(el => {
        let card = document.createElement('img');
        card.style.height = '205px';
        card.style.width = '190px';
        card.className = "images";
        card.id = el.id;
        let src = "images/upitnik.jpg";
        card.src = src;
        card.addEventListener('click',() => {
            if(pairs.includes(el)){
                return
            }
            match.innerHTML = '';
            chosenCards.push(el);
            src = el.src;
            card.src = src;
            if(chosenCards.length === 2){
                setTimeout(() => {
                    let newSrc = checkForMatch();
                    card.src = newSrc;
                    document.querySelector(`#${chosenCards[0].id}`).src = newSrc;
                    document.querySelector(`#${chosenCards[1].id}`).src = newSrc;
                    chosenCards = [];
                }, 500 )}
            clicks ++;
            hclicks.textContent = `Clicks: ${clicks}`;
        });
        div.appendChild(card);
    })

    return div;
}

// CHECK FOR MATCH //

const checkForMatch = () => {
    let optionOne = chosenCards[0];
    let optionTwo = chosenCards[1];
    let src;
    if(optionOne.name === optionTwo.name){
        match.innerHTML = 'Match!'
        pairs.push(optionOne,optionTwo);
        src = "images/zorica.jpg";
    } else {
        match.innerHTML = 'Nope!'
        src = "images/upitnik.jpg";
    }
    result.innerHTML = `Pairs found: ${pairs.length/2}`;
    if(pairs.length === images.length){
        result.innerHTML = 'You found them all!';
    }
    return src;
}

newGame.addEventListener('click', () => {
    chosenCards = [];
    pairs = [];
    clicks = 0;
    app.innerHTML = '';
    hclicks.textContent = `Clicks: 0`;
    result.innerHTML = 'Pairs found: 0';
    match.innerHTML = '';
    app.appendChild(Board(images));
})

app.appendChild(Board(images));

