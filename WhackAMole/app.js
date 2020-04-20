const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('mole');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');
const select = document.querySelector('#time');

let score = document.querySelector('#score');
let counter = document.querySelector('#time-left');
let currentTime = parseInt(select.value);
let best = document.querySelector('#best');

let result = 0;
let hitPosition;
let results = [];
let arrMax = [];

const randomSquare = () => {
    squares.forEach(el => {
        el.classList.remove('mole');
        el.classList.remove('hit');
    });
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

squares.forEach(el => {
    el.addEventListener('mouseup',() => {
        if(el.id === hitPosition){
            el.classList.add('hit');
            result ++;
            score.textContent = result;
        }
    })
})

let moleTimer = null;

const moveMole = () => { 
    moleTimer = setInterval(randomSquare,1000);
}

const stopMole = () => {
    squares.forEach(el => el.classList.remove('mole'));
    clearInterval(moleTimer);
    hitPosition = null;
}

const findMax = () => {
    arrMax = [{
        score: 0,
        time: select.value
    }];
    results.forEach(el => {
        if(el.time === select.value){
            arrMax.push(el);
        }
    })
    let max = arrMax[0];
    for(let el of arrMax){
        if(el.score >= max.score){
            max = el;
        }
    }
    best.textContent = max.score;
}

const countDown = () => {
    currentTime --;
    counter.textContent = currentTime;
    if(currentTime === -1){
        clearInterval(timerId);
        counter.textContent = 0;
        alert(`Game over! Your result: ${result}`);
        results.push({score: result, time: select.value});
        findMax();
        stopMole();
        return
    }
}

let timerId;

start.addEventListener('click', () => {
    result = 0;
    score.textContent = result;
    currentTime = parseInt(select.value);
    counter.textContent = currentTime;
    moveMole();
    timerId = setInterval(countDown,1000);
})

select.addEventListener('change',(e) => {
    findMax();
    score.textContent = '0';
    counter.textContent = e.target.value;
});