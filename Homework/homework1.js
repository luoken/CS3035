var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

	//game play here
	var deck = {
	    //temp is card array
	    temp : [],
	    size: 0,
	    pot: 200,
	    playerBank: 50,
	    playerBet: 0,
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
	    
	    reshuffle: function(){
		
	    }
	};


var cards = deck;
cards.createArray();
cards.shuffle();
cards.changeFaceCards();
cards.getMaped();
cards.size = 52;

console.log("Welcome! Enter 1 to continue, 0 to quit");
rl.setPrompt('AceyDeucy> ');
rl.prompt();
rl.on('line', function(line) {
	if (line === "0") rl.close(); 

	//start game play
	var cardOne = deck.map[deck.deal()];
	cards.size--;
	var cardTwo = deck.map[deck.deal()];
	cards.size--;
	var cardThree = deck.map[deck.deal()];
	cards.size--;
	
	console.log(cards.size);
	console.log(cardOne);
	console.log(cardTwo);
	
	rl.question("Enter your bet", function(number){
		console.log(number);
		console.log(cardThree);
		
		if(cardOne < cardTwo){
		    if((cardOne < cardThree) && (cardThree < cardTwo)){
			console.log("You win second card bigger");
		    }
		    else{
			console.log("You lose second card bigger");
		    }
		}
		else{
		    if((cardTwo < cardThree) && (cardThree < cardOne)){
			console.log("You win first card bigger");
		    }
		    else{
			console.log("You lose first card bigger");
		    }
		}
		console.log("Enter 1 to play again, 0 to quit");
		rl.prompt();
	    });
    
    }).on('close',function(){
	    console.log("Thanks!");
	    process.exit(0);
	});
