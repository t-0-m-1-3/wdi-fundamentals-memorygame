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


var flipCard = function() {
// body of function
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + this.rank);
	cardsInPlay.push(this.rank);
	console.log("User flipped " + this.suit);
	console.log("User flipped " + this.cardImage);
	
	// if (cardsInPlay.length ===2 ) {} 
	checkForMatch();
	cardElement.setAttribute('src', this.cardImage);

}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');	
		cardElement.className = 'card- ' + i;
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(flipCard);
	
	}
}

createBoard ()