const guess = document.getElementById("guess");
const report = document.getElementById("report")

let MINIMUM = 1;
let MAXNUM = 100;

let secret;
var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true

});

function loadGame() {
    guess.min = MINIMUM;
    guess.max = MAXNUM;

    secret = Math.random();
    let range = MAXNUM - MINIMUM + 1; // Calculate the range of numbers
    secret = secret * range;
    secret = secret + MINIMUM;
    secret = Math.floor(secret); // Convert float to integer
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!

    if (myGuess == secret) {
        report.innerHTML += `<br>${myGuess} is correct! :)`
        document.body.style.backgroundColor = "lightgreen"
        myConfetti({
            particleCount: 100,
            spread: 160
        })
    } else if (myGuess < secret) {
        report.innerHTML += `<br>${myGuess} is too small`;
    } else {
        report.innerHTML += `<br>${myGuess} is too big`;
    }
}