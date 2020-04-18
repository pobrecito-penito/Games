const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('mole');

let score = document.querySelector('#score');
let counter = document.querySelector('#time-left');
let currentTime = counter.textContent;
let best = document.querySelector('#best');

let result = 0;
let hitPosition;
let results = [];

const randomSquare = () => {
    squares.forEach(el => el.classList.remove('mole'));
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

squares.forEach(el => {
    el.addEventListener('mouseup',() => {
        if(el.id === hitPosition){
            result ++;
            score.textContent = result;
        }
    })
})

const moveMole = () => {
    let timerId = null;
    timerId = setInterval(randomSquare,1000);
}

moveMole();

const countDown = () => {
    currentTime --;
    counter.textContent = currentTime;
    if(currentTime === 0){
        clearInterval(timerId);
        // alert(`Game over! Your result: ${result}`);
        results.push(result);
        let max = results[0];
        for(let el of results){
            if(el >= max){
                max = el;
            }
            best.textContent = max;
        }
        result = 0;
        score.textContent = result;
        currentTime = 61;
        timerId = setInterval(countDown,1000);
    }
}

let timerId = setInterval(countDown,1000);