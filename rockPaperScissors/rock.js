// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.


const  getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
    
    console.log('error');
    };
    };
    
    // console.log(getUserChoice('paper'))
    
    const getComputerChoice = () => {
    const number = Math.floor(Math.random() * 3)
    if(number === 0){
      return 'rock';
    }else if(number === 1){
      return 'paper';
    }else if(number === 2)
    return 'scissors';
    };
    // console.log(getComputerChoice())
    
    const winner = (getUserChoic, getComputerChoice) =>{
      if(getUserChoic === getComputerChoice){
      return 'tie';
      }
      if(getUserChoice === 'bomb'){
         return 'you won';
      }
      if(getUserChoic === 'rock'){
        if(getComputerChoice === 'paper'){
          return 'comp won';
        }else{
          return 'you won';
        }
      }
      if(getUserChoic === 'paper'){
        if(getComputerChoice === 'scissors' || 'rock')
        return 'comp won haha'
      }else{
        return 'you win!'
      }
      if(getUserChoic === 'scissors'){
        if(getComputerChoice=== 'paper' || 'rock')
        return 'comp won hahaaaa'
      }else{
        return 'you win!'
      }
    };
    // console.log(winner('paper', 'rock')); 
    
    const play = () =>{
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('you threw: ' + userChoice)
    console.log('comp threw: ' + computerChoice)
    console.log(winner(userChoice, computerChoice));
    }
    play()
    