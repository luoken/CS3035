var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

	//game play here
	var deck = {
	    //temp is card array
	    temp : [],
	    size: 0,
	    pot: 200,
	    playerPot: 50,
	    map: {},

	    getSuit : function(number){
		return Math.floor(number/13);
		
	    },

	    getNumber: function(number){
		return number%13;
	    },

	    createArray : function(){
		for(var i = 0; i < 52; i++){
		   this.temp.push(i);
		}
	    },

	    shuffle : function(){
		for (var k = 51; k > 0; k--) {
		    var j = Math.floor(Math.random() * (k + 1));
		    var holder = this.temp[k];
		    this.temp[k] = this.temp[j];
		    this.temp[j] = holder;
		}
		this.temp = this.temp;
	    },

	    deal: function(){
		return deck.temp.pop();
	    },

	    showArray: function(){
		for(var i = 0; i < 52; i++){
		    console.log(this.temp[i]);
		}
	    },

	    getMaped: function(){
		for(var i = 0; i < 52; i++){
		    this.map[i] = (this.changeFaceCards(this.getNumber(i)) + " of " + this.changeSuite(this.getSuit(i)));
		}
	    },

	    
	    showMaped: function(){
		for(var i = 0; i < 52; i++){
		    console.log(this.map[i]);
		}
	    },
	    
	    changeFaceCards: function(number){
		if(number == 9){
		    return "J";
		}
		else if(number == 12){
		    return "A";
		}
		else if(number == 10){
		    return "Q";
		}
		else if(number == 11){
		    return "K";
		}
		else {
		    return (number+2);
		}
	    },
	    
	    changeSuite: function(number){
		if(number == 0){
		    return "Diamond";
		}
		else if(number == 1){
		    return "Clover";
		}
		else if(number == 2){
		    return "Heart";
		}
		else{
		    return "Spade";
		}
	    },
	    
	    showShuffleMapped: function(value){
		for(var i = 0; i < value.length; i++){
		    console.log(deck.map[value[i]]);
		}
	    },

	};


var cards = deck;
cards.createArray();
cards.shuffle();
cards.changeFaceCards();
cards.getMaped();
cards.size = 52;



cards.showShuffleMapped(cards.temp);
console.log("Welcome! Enter 1 to continue, 0 to quit");
rl.setPrompt('AceyDeucy> ');
rl.prompt();
rl.on('line', function(line) {
	if (line === "0") rl.close(); 

	//start game play
	if(cards.size < 3){
	    var one = cards.deal();
	    var two = cards.deal();
	    var three = cards.deal();
	    cards.createArray();
	    cards.shuffle();
	    cards.changeFaceCards();
	    cards.size = 52;
	    var cardOne = cards.map[one];
	    cards.size--;
	    var cardTwo = cards.map[two];
	    cards.size--;
	    var cardThree = cards.map[three];
	    cards.size--;
	}
	else{
	    var one = cards.deal();
	    var two = cards.deal();
	    var three = cards.deal();
	    var cardOne = cards.map[one];
	    cards.size--;
	    var cardTwo = cards.map[two];
	    cards.size--;
	    var cardThree = cards.map[three];
	    cards.size--;
	}
	console.log(cardOne);
	console.log(cardTwo);

	rl.question("Enter your bet", function(number){
		if(number > cards.playerPot && parseInt(number) >= parseInt(0)){
		    console.log("Please enter a valid amount");
		}
		else{
		    console.log(number);
		    console.log(cardThree);
		    
		    if(cards.getNumber(one) < cards.getNumber(two)){
			if((cards.getNumber(one) < cards.getNumber(three)) && (cards.getNumber(three) < cards.getNumber(two))){
			    console.log("You win");
			    cards.playerPot = parseInt(cards.playerPot) + parseInt(number);
			    cards.pot = parseInt(cards.pot) - parseInt(number);
			}
			else{
			    console.log("You lose");
			    cards.playerPot = parseInt(cards.playerPot) - parseInt(number);
			    cards.pot = parseInt(cards.pot) + parseInt(number);
			}
		    }
		    else if(cards.getNumber(two) < cards.getNumber(one)){
			if((cards.getNumber(two) < cards.getNumber(three)) && (cards.getNumber(three) < cards.getNumber(one))){
			    console.log("You win");
			    cards.playerPot = parseInt(cards.playerPot) + parseInt(number);
			    cards.pot = parseInt(cards.pot) - parseInt(number);
			}
			else{
			    console.log("You lose");
			    cards.playerPot = parseInt(cards.playerPot) - parseInt(number);
			    cards.pot = parseInt(cards.pot) + parseInt(number);
			}
		    }
		    else{
			console.log("You lose");
			cards.playerPot = parseInt(cards.playerPot) - parseInt(number);
			cards.pot = parseInt(cards.pot) + parseInt(number);
		    }
		    console.log("playerPot: " + cards.playerPot);
		    console.log("pot: " + cards.pot);
		    if(cards.playerPot == 0){
			console.log("No more money! Good bye!");
			process.exit(0);
		    }
		    console.log("Enter 1 to play again, 0 to quit");
		    rl.prompt();
		}
	    });
	    
    
    }).on('close',function(){
	    console.log("Thanks!");
	    process.exit(0);
	});
