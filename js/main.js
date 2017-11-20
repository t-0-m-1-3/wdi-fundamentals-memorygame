var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}


var flipCard = function(cardElement) {
// body of function
	var cardId = cardElement.getAttribute('data-id');
	console.log("User flipped " + cardElement.dataset.rank);
	console.log("User flipped " + cardElement.suit);
	console.log("User flipped " + this.cardImage);
	
	// if (cardsInPlay.length ===2 ) {} 
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} else { 
	cardsInPlay.push(cardElement);
}
	cardElement.setAttribute('src', cardElement.cardImage);
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');	
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', function() {flipCard(this)});
		document.getElementById('game-board').appendChild(cardElement);
	
	}
}

createBoard ()