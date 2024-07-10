let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses:0,
  ties: 0
  };
  
  updatteScoreElement();
  

  document.querySelector('.js-auto-play')
    .addEventListener('click', () => {
      autoPlay('Auto Play')
    })

  let isAutoPlaying = true;
  let intervalId;

  function autoPlay() {
    const button = document.querySelector('.js-auto-play');
    isAutoPlaying = !isAutoPlaying
    if (isAutoPlaying) {
      button.textContent = 'Stop Playing'
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
       startAutoplay();
      }, 1000);
      isAutoPlaying = true;
    } else {
      button.textContent = 'Auto Play'
      clearInterval(intervalId);
      isAutoPlaying = false;
      stopAutoplay()
    }
  };

  function startAutoplay() {
    console.log('Auto-play started')
  }
  function stopAutoplay() {
    console.log('Auto-play stopped')
  }

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
      autoPlay('Auto Play');
    }
  });
  


  document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
      playGame('rock')
    });

  document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
      playGame('paper')
    });


  document.querySelector('.js-scissor-button')
    .addEventListener('click', () => {
      playGame('scissors')
    });   
  
   
  function updatteScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  document.querySelector('.reset-button')
    .addEventListener('click', () => {
      score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updatteScoreElement()
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      updatteScoreElement('removeItem')
    }
  });
  
function pickComputerMove() {
  const randomNumber = Math.random();

  let  computerMove = '';


  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
  }

  return computerMove;
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors')
  }
})


function playGame(playerMove) {
  const computerMove = pickComputerMove();


  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose'
    } else if (computerMove === 'paper') {
      result = ' you win ';
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win'
    } else if (computerMove === 'paper') {
      result = ' tie. ';
    } else if (computerMove === 'scissors') {
      result = 'You lose'
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = ' you lose ';
    } else if (computerMove === 'scissors') {
      result = 'You win'
    }
  }
  
  if (result === 'You win') {
    score.wins += 1
  } else if (result === 'you lose') {
    score.losses += 1
  } else if (result === 'Tie') {
    score.ties += 1
  }



  localStorage.setItem('score', JSON.stringify(score));

  updatteScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
  <img src="/image/${playerMove}images2.jpeg" class="move-icon">
  <img src="/image/${computerMove}.jpeg" class="move-icon">
  Computer`;
}
