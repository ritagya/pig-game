/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

function newGame() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
// Hiding dice before begining the game
	document.querySelector('.dice').style.display = 'none';
// Setting all score values to 0
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1'
	document.getElementById('name-1').textContent = 'Player 2'
	document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// Calling newGame function as soon as the page reloads
newGame();

// Do this when new game button is clicked
document.querySelector('.btn-new').addEventListener('click', newGame);

// Do this when roll dice button is clicked
document.querySelector('.btn-roll').addEventListener('click', function(){
	// 1. Roll a die 
	const dice = Math.floor(Math.random() * 6) + 1;
	
	// 2. Display the result
	document.querySelector('.dice').style.display = 'block';
	document.querySelector('.dice').src = "dice-" + dice + ".png";
	
	// 3. Update the round score IF the rolled number is not 1
	if(dice !== 1){
		// Add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}
	else{
		// Next Player
		nextPlayer();
	}
})

// Do this when hold button is clicked
document.querySelector('.btn-hold').addEventListener('click' , function(){
	// 1. Add current score to global score
	scores[activePlayer] += roundScore ;
	
	// 2. Update the UI 
	document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
	
	// 3. Check if player won the game
	if(scores[activePlayer] >= 100){
		document.querySelector('#name-' + activePlayer).textContent = "Winner!"
		document.querySelector('.dice').style.display = 'none';
		
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	}
	else{
		nextPlayer();
	}
})


function nextPlayer(){
	    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		document.getElementById("current-0").textContent = '0';
		document.getElementById("current-1").textContent = '0';
		
		document.querySelector('.player-0-panel').classList.toggle('active');
	    document.querySelector('.player-1-panel').classList.toggle('active');
}







