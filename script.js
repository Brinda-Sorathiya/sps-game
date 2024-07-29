let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const options = document.querySelectorAll(".option");

const genChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rdm = Math.floor(Math.random()*3);
    return options[rdm];
};   

const draw = () => {
    msg.innerText = "Draw game!!!😅try again🙏."
    msg.style.backgroundColor = "aquamarine";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!🥳🥳🥳 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "gold";
      } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost😔😔😔. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "silver";
      }
};

const playgame = (userChoice) => {
    const compChoice = genChoice();
    
    if(userChoice===compChoice){
        draw();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
        } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

options.forEach((option) => {
    option.addEventListener("click", () =>{
        
        option.classList.add('active');
        setTimeout(() => {
            option.classList.remove('active');
        }, 200);
        const userchoice = option.getAttribute("id");
        playgame(userchoice);
    });
});