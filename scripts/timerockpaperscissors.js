let score = JSON.parse(localStorage.getItem('score')) || {
    Lossses:0,
    Wins:0,
    Ties:0


}

/*if (score === null){
    Lossses:0,
    Wins:0,
    Ties:0,
}
  */

 
updateScore();
let isAutoplaying =false;
let intervalID;
function autoplay(){
    if(!isAutoplaying){
      intervalID =setInterval (() => {
        const userChoice = pickcomputerMove();
        playGame(userChoice);}
        ,1000);
        isAutoplaying=true;
        }
    else{
            clearInterval(intervalID);
            isAutoplaying=false;
        }
    }

document.querySelector('.js-rock-button').addEventListener('click',() =>{
    playGame('Rock');

});

document.querySelector('.js-paper-button').addEventListener('click',() =>{
    playGame('Paper');

});

document.querySelector('.js-scissors-button').addEventListener('click',() =>{
    playGame('Scissors');

});
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('Rock');
    }else if (event.key ==='p'){
        playGame('Paper');
    }else if(event.key === 's'){
        playGame('Scissors');
    }
    

});




function playGame(userChoice){
  const computerchoice = pickcomputerMove();
  let result ='';
  
  if (userChoice === 'Rock'){
  
      if (computerchoice === 'Rock'){
          result ='Tie.';
      }
      else if (computerchoice === 'Paper'){
          result = 'You lose.';
      }
      else if (computerchoice === 'Scissors'){
          result = 'You win.';
      }
  }

  else if(userChoice === 'Paper'){
   
      if (computerchoice === 'Rock'){
          result ='You win.';
      }
      else if (computerchoice === 'Paper'){
          result = 'Tie.';
      }
      else if (computerchoice === 'Scissors'){
          result ='You lose.';
  
      }
  }

  else if(userChoice === 'Scissors'){
          
      if (computerchoice === 'Rock'){
          result ='You lose.';
      }
      else if (computerchoice === 'Paper'){
          result = 'You win.';
      }
      else if (computerchoice === 'Scissors'){
          result = 'Tie.';
      }
  }


  if (result==='You win.'){
       score.Wins+=1;
  }
  else if(result ==='You lose.'){
       score.Lossses+=1;
  }
  else if(result==='Tie.'){
      score.Ties+=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
  
  updateScore();
  document.querySelector('.js-result').innerHTML= result;
  document.querySelector('.js-moves').innerHTML= `You
  <img src="images/${userChoice}-emoji.png" class="icon">
  <img src="images/${computerchoice}-emoji.png" class="icon">
  Computer`;
  
}



function updateScore(){
 
  document.querySelector('.js-score').innerHTML = (`Wins :${score.Wins} Losses :${score.Lossses} Ties :${score.Ties}`);

}
function pickcomputerMove(){

  const randomno = Math.random();
  let computerchoice ='';


  if(randomno>=0 && randomno<1/3){
  computerchoice='Rock';
  }
  else if(randomno>=1/3 && randomno<2/3){
  computerchoice='Paper';
  }
  else if(randomno>=2/3 && randomno<1){
      computerchoice='Scissors';
  }

  return computerchoice;
}