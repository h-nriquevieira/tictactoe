const player = (function(){
  function registerMove(e) {
    let playId = e.path[0].id;
    gameFlow.registerMove(playId);
  }

  return {registerMove};
})();

const gameBoard = (function(){
  
  const currentState = ['', '', '', '', '', '', '', '', ''];
  const gameboardDomCells = document.querySelectorAll('.grid-cell');
  gameboardDomCells.forEach(cell => {addEventListener('click', player.registerMove)});


  function updateBoard() {
    for (let i = 0; i < gameboardDomCells.length; i++) {
      gameboardDomCells[i].textContent = currentState[i];
    }
  }

  function updateCurrentState(play) {
    currentState[play] = 'o';
  }

  return {currentState, gameboardDomCells, updateBoard, updateCurrentState}
})();

const gameFlow = (function() {
  function registerMove(play) {
    gameBoard.updateCurrentState(play);
    gameBoard.updateBoard();
    checkIfOver();
  }

  function checkIfOver() {  
    let counter = 0
    for (let i = 0; i<gameBoard.currentState.length; i++) {
      if (gameBoard.currentState[i]) {counter++}
    } 
    if (counter === gameBoard.currentState.length) {
      console.log('draw');
      return;
    }


    if (gameBoard.currentState[0] && gameBoard.currentState[1] && gameBoard.currentState[2]) {
      if (gameBoard.currentState[0] === gameBoard.currentState[1] && gameBoard.currentState[0] === gameBoard.currentState[2]) {
        console.log('game over');
        return;
      }
    }
    console.log('here')
    if (gameBoard.currentState[3] && gameBoard.currentState[4] && gameBoard.currentState[5]) {
      if (gameBoard.currentState[3] === gameBoard.currentState[4] && gameBoard.currentState[3] === gameBoard.currentState[5]) {
        console.log('game over');
      }
    } 
    
    // if (gameBoard.currentState[6] && gameBoard.currentState[7] && gameBoard.currentState[8]) {
    //   if (gameBoard.currentState[6] === gameBoard.currentState[7] && gameBoard.currentState[6] === gameBoard.currentState[8]) {
    //     console.log('game over');
    //   }
    // } 

    // if (gameBoard.currentState[0] && gameBoard.currentState[3] && gameBoard.currentState[6]) {
    //   if (gameBoard.currentState[0] === gameBoard.currentState[3] && gameBoard.currentState[0] === gameBoard.currentState[6]) {
    //     console.log('game over');
    //   }
    // } 

    // if (gameBoard.currentState[1] && gameBoard.currentState[4] && gameBoard.currentState[7]) {
    //   if (gameBoard.currentState[1] === gameBoard.currentState[4] && gameBoard.currentState[1] === gameBoard.currentState[7]) {
    //     console.log('game over');
    //   }
    // } 

    // if (gameBoard.currentState[2] && gameBoard.currentState[5] && gameBoard.currentState[8]) {
    //   if (gameBoard.currentState[2] === gameBoard.currentState[5] && gameBoard.currentState[2] === gameBoard.currentState[8]) {
    //     console.log('game over');
    //   }
    // } 

    // if (gameBoard.currentState[0] && gameBoard.currentState[4] && gameBoard.currentState[8]) {
    //   if (gameBoard.currentState[0] === gameBoard.currentState[4] && gameBoard.currentState[0] === gameBoard.currentState[8]) {
    //     console.log('game over');
    //   }
    // } 

    // if (gameBoard.currentState[2] && gameBoard.currentState[4] && gameBoard.currentState[6]) {
    //   if (gameBoard.currentState[2] === gameBoard.currentState[4] && gameBoard.currentState[2] === gameBoard.currentState[6]) {
    //     console.log('game over');
    //   }
    // } 
  }

  return {registerMove};
})();
