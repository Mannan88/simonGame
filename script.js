const color = ['red', 'blue', 'green', "yellow"];
let gameSequence = [];
let counter = 0;
let userInputSequence = [];
let userBTN = '';

document.querySelector("#start_menu").addEventListener('click', ()=>{
    document.querySelector("#start_menu").classList.add("invisible");
    document.querySelector("#game_start").classList.remove("invisible");
    setTimeout(()=>{generateSequence();},1000)
})

function generateSequence() {
    const randomButton = color[Math.floor(Math.random() * 4)]
    gameSequence.push(randomButton);
    counter++;
    userInputSequence = [];
    playSequence();
    document.getElementById('level').innerHTML = counter;
}
function playSequence() {
    gameSequence.forEach((colour, index) => {
        setTimeout(() => { clickButton(colour); }, index * 1000)
    })
    setTimeout(() => {
        getUserInput();
    }, gameSequence.length * 1000)

}
function clickButton(colour) {
    document.getElementById(colour).classList.add("click");
    setTimeout(() => {
        document.getElementById(colour).classList.remove('click')
    }, 300);
}
function getUserInput() {
    color.forEach(colour => {
        document.getElementById(colour).onclick = () => {
            userInputSequence.push(colour);
            clickButton(colour);
            checkUserInput();
        }
    })
}
function checkUserInput() {
    if (userInputSequence[userInputSequence.length - 1] !== gameSequence[userInputSequence.length - 1]) {
        counter = 0;
        gameSequence = [];
        document.getElementById('title').innerHTML = 'Game over!';
        setTimeout(() => {
            document.getElementById('title').innerHTML = 'Simon Game';
            generateSequence();
        }, 1500);

    }
    else if (userInputSequence.length === gameSequence.length) {
        document.getElementById('title').innerHTML = 'Next level'
        setTimeout(() => {
            document.getElementById('title').innerHTML = '';
            generateSequence();
        }, 1500);
    }
}



