console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";


var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay =[];

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

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


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
 // console.log(cardOne);
 // console.log(cardTwo);
