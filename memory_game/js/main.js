console.log("Up and running!");


var cards = [  
{
rank : 'queen',
suit : 'hearts',
cardImage :  "images/queen-of-hearts.png"
},
{
rank : 'quee',
suit : 'diamonds',
cardImage :  "images/queen-of-diamonds.png"
},
{
rank : 'king',
suit : 'hearts ',
cardImage :  "images/king-of-hearts.png"
},
{
rank : 'king',
suit : 'diamonds',
cardImage :  "images/king-of-diamonds.png"
}
];
var cardsInPlay =[];
										
var flipCard = function(cardId) {

	cardsInPlay.push(cards[cardId].rank);  
console.log(cards[cardId].cardImage )
console.log(cards[cardId].suit )
	console.log("User flipped " + cards[cardId].rank )

if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1] )
	 {
		alert(" You found a match! ");
	}

	 else
	  {
	  	alert("nah!");
	 }
}

}  // put ;

flipCard(0);
flipCard(2);
