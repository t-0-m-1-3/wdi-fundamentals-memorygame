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

var checkForMatch = function(cardToCheck) {
	if (cardsInPlay[0].dataset.rank === cardToCheck.dataset.rank) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}


var flipCard = function(cardElement) {
// body of function
	var cardId = cardElement.getAttribute('data-id');
	console.log("User flipped " + cardElement.dataset.rank);
	console.log("User flipped " + cardElement.dataset.suit);
	console.log("User flipped " + cardElement.dataset.cardimage);
	
	// if (cardsInPlay.length ===2 ) {} 
	if (cardsInPlay.length === 1) {
		checkForMatch(cardElement);
	} else { 
	cardsInPlay.push(cardElement);
}
	cardElement.setAttribute('src', cardElement.dataset.cardimage);
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');	
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-rank', cards[i].rank);
		cardElement.setAttribute('data-suit', cards[i].suit);
		cardElement.setAttribute('data-cardimage', cards[i].cardImage);
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', function() {flipCard(this)});
		document.getElementById('game-board').appendChild(cardElement);
	
	}
}

createBoard ()