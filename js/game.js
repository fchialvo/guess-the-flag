const flag = document.getElementById("flag");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score")
const progressbarFull = document.getElementById("progressBarFull")
const loader = document.getElementById("loader");
const game = document.getElementById("game");


let currentFlag = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableFlags = [];
let selectedOption = 0;

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = localStorage.getItem("flagNum");
startGame = () =>{
    questionCounter = 0;
    score = 0
    availableFlags = [...flags];
    getNewFlag();
};



getNewFlag = () => {
    if(availableFlags.length == 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = "Question " + questionCounter + "/" + MAX_QUESTIONS;

    //Update the progress bar
    progressbarFull.style.width = `${(questionCounter/MAX_QUESTIONS * 100)}%`;


    const flagIndex = Math.floor(Math.random() * availableFlags.length);
    currentFlag = availableFlags[flagIndex];

    flag.src = currentFlag.flag;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentFlag.answers[number-1];
    });

    availableFlags.splice(flagIndex, 1);

    acceptingAnswers = true;
}


choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = 'incorrect';
        if(selectedAnswer == currentFlag.correctAnswer){
            classToApply = 'correct'
        }

        if(classToApply == 'correct'){
            incrementScore(CORRECT_BONUS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewFlag();
        }, 1000);
        
    })
})

function incrementScore(num){
    score += num;
    scoreText.innerText = score;
}
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
    document.getElementById('game').classList.add("hidden");
    } else if (state == 'complete') {
    setTimeout(function(){
        document.getElementById('interactive');
        document.getElementById('loader').classList.add("hidden");
        document.getElementById('game').classList.remove("hidden");
    },1000);
}}
startGame()