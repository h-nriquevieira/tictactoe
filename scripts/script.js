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
    currentState[play] = 'x';
  }

  function resetBoard() {
    for (let i = 0; i < currentState.length; i++) {
      currentState[i] = '';
    }
    updateBoard();
  }

  return {currentState, gameboardDomCells, updateBoard, updateCurrentState, resetBoard}
})();

const gameFlow = (function() {
  function registerMove(play) {
    gameBoard.updateCurrentState(play);
    gameBoard.updateBoard();
    checkIfOver();
  }

  function announceDraw() {
    console.log('It\'s a draw!');
  }

  function checkWinner(i) {
    switch (gameBoard.currentState[i]) {
      case 'x':
        return 'player';
      case 'o':
        return 'pc';
    }
  }

  function announceWinner(winner) {
    switch (winner) {
      case 'player':
        console.log('You win!');
        break;
      case 'pc':
        console.log('PC wins!');
        break;
    }
  }

  function checkIfOver() {  
    let counter = 0
    for (let i = 0; i<gameBoard.currentState.length; i++) {
      if (gameBoard.currentState[i]) {counter++}
    } 
    if (counter === gameBoard.currentState.length) {
      announceDraw();
      gameBoard.resetBoard();
      return;
    }


    if (gameBoard.currentState[0] && gameBoard.currentState[1] && gameBoard.currentState[2]) {
      if (gameBoard.currentState[0] === gameBoard.currentState[1] && gameBoard.currentState[0] === gameBoard.currentState[2]) {
        console.log('game over');
        let winner = checkWinner(0);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
      }
    }

    if (gameBoard.currentState[3] && gameBoard.currentState[4] && gameBoard.currentState[5]) {
      if (gameBoard.currentState[3] === gameBoard.currentState[4] && gameBoard.currentState[3] === gameBoard.currentState[5]) {
        console.log('game over');
        let winner = checkWinner(3);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 
    
    if (gameBoard.currentState[6] && gameBoard.currentState[7] && gameBoard.currentState[8]) {
      if (gameBoard.currentState[6] === gameBoard.currentState[7] && gameBoard.currentState[6] === gameBoard.currentState[8]) {
        console.log('game over');
        let winner = checkWinner(6);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 

    if (gameBoard.currentState[0] && gameBoard.currentState[3] && gameBoard.currentState[6]) {
      if (gameBoard.currentState[0] === gameBoard.currentState[3] && gameBoard.currentState[0] === gameBoard.currentState[6]) {
        console.log('game over');
        let winner = checkWinner(0);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 

    if (gameBoard.currentState[1] && gameBoard.currentState[4] && gameBoard.currentState[7]) {
      if (gameBoard.currentState[1] === gameBoard.currentState[4] && gameBoard.currentState[1] === gameBoard.currentState[7]) {
        console.log('game over');
        let winner = checkWinner(1);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 

    if (gameBoard.currentState[2] && gameBoard.currentState[5] && gameBoard.currentState[8]) {
      if (gameBoard.currentState[2] === gameBoard.currentState[5] && gameBoard.currentState[2] === gameBoard.currentState[8]) {
        console.log('game over');
        let winner = checkWinner(2);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 

    if (gameBoard.currentState[0] && gameBoard.currentState[4] && gameBoard.currentState[8]) {
      if (gameBoard.currentState[0] === gameBoard.currentState[4] && gameBoard.currentState[0] === gameBoard.currentState[8]) {
        console.log('game over');
        let winner = checkWinner(0);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 

    if (gameBoard.currentState[2] && gameBoard.currentState[4] && gameBoard.currentState[6]) {
      if (gameBoard.currentState[2] === gameBoard.currentState[4] && gameBoard.currentState[2] === gameBoard.currentState[6]) {
        console.log('game over');
        let winner = checkWinner(2);
        announceWinner(winner);
        gameBoard.resetBoard();
        return;
        return;
      }
    } 
  }

  return {registerMove};
})();
