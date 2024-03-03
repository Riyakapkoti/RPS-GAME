// variables for user and comp score

let userScore= 0;
let compScore= 0;

const choices= document.querySelectorAll(".choice"); // access all the choice(div)
const msg = document.querySelector("#msg");


const userScorepara = document.querySelector("#user-score");   
const compScorepara = document.querySelector("#comp-score");




const genComChoice =() =>{           //generate computer choice
    const options =["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random() *3 );      //to generate the random number
    return options[randIdx];

};

const showWinner =(userWin, userchoice, compchoice )=>{
    if(userWin){
        //for user score updation
        userScore++;
        userScorepara.innerText = userScore;
        //text updation when user will win will showed in the screen
        msg.innerText = `You Win!! Your ${userchoice} beats computer ${compchoice}`;  //display on the screen
        msg.style.backgroundColor="green"; //change color when win
    }else{
        //for comp score updation
        compScore++;
        compScorepara.innerText = compScore;
        //text updation when comp will win
        msg.innerText = `You lost. Computer ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red" //change color when loose
    }
}

const playGame=(userchoice) => {                 //playgame know the user choice 
    console.log("user choice=", userchoice);    // return user choice
    const compchoice= genComChoice();           //gencomchoice return the computer choice
    console.log("comchoice =", compchoice);      // return computer choice
    

    const drawGame= () => {
        msg.innerText = "DRAW! Play again"; //display on the screen
        msg.style.backgroundColor="gray"    //change color when its draw
    }
    if(userchoice === compchoice){    //when user and comp choice will same it will show us some text
        //draw condition
        drawGame();
    }
    else {
        let userWin =true;    //track user is winning or not
        if(userchoice=== "rock"){
         //com choice will scissors and paper
        userWin = compchoice==="paper" ? false : true;


    } else if(userchoice === "paper"){
        //rock scissor
        userWin = compchoice==="scissor" ? false : true;


    } else if(userchoice==="scissor"){
        //rock paper
        userWin = compchoice==="rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice); //retuṛn win when user will win or comp will win
    
 }
   
}
 choices.forEach((choice)=>{                     //to add function for all the choices or div
    choice.addEventListener("click",()=>{            //for applying the click event
        const userchoice= choice.getAttribute("id"); //get is used for returning id name
        playGame(userchoice);
    })
 })
 


























































































































































































