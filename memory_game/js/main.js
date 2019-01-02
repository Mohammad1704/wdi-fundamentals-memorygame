console.log("Up and running!");


var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay =[];
										//cards[] = cards[cardId]
var flipCard = function(cardId) {

	cardsInPlay.push(cards[cardId]);  //solve: 1- move it befor flipCard function . 2- use alternative https://stackoverflow.com/questions/4156101/push-array-items-into-another-array 
												// 3- chang to [cardId] or cardId									// or https://www.hostingadvice.com/how-to/javascript-add-to-array/#push
console.log("User flipped" + cards[cardId])

if (cardsInPlay.length === 2)
{
	if (cardsInPlay[0] === cardsInPlay[1] )
	 {
		alert("You found a match!");
	}

	 else
	  {
	  	alert("nooope!");
	 }
}

}  // put ;

flipCard(0);
flipCard(2);
