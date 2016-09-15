function num(){
    var number = Number(prompt("Pick a number", ""));

    while((number < 10) || ( number > 20)){
	number = Number(prompt("Pick a number", ""));
	console.log(number);
    }

    if (number >= 10 && number <= 20){
	alert(number + " is within!");
    }

};

function FizzBuzzCracklePop(){
    for(var count = 0; count < 100; count++){
	if(count % 3 == 0){
	    if(count % 5 == 0){
		if(count % 4 == 0){
		    if(count % 6 == 0){
			console.log(count + " fizz buzz crackle pop");
		    }
		}
		else console.log(count + " fizz buzz");
		
	    }
	    else console.log(count + " fizz");
	}
	else if(count % 5 == 0){
	    console.log(count + " buzz");
	}
	else if(count % 4 == 0){
	    if(count % 6 == 0){
		console.log(count + " crackle pop");
	    }
	    console.log(count + " crackle");
	}
	else if(count % 6 == 0){
	    console.log(count + " pop");
	}
	else console.log(count);
    }
};

function Landscape(mount, lake, flat, forest){
    var result = "";
    var mountain = function(mount){
	result += "/";
	for(var count = 0; count < mount; count ++){
	    result += "'''''";
	}
	result += "\\";
    };
    var lakes = function(lake){
	for(var count = 0; count < lake; count++){
	    result += "~~~~~~";
	}
    };
    var flats = function(flat){
	for(var count = 0; count < flat; count ++){
	    result += "______";
	}
    };
    var forests = function(forest){
	for(var count = 0; count < forest; count++){
	    result += "AAAAA";
	}
    };
    mountain(mount);
    lakes(lake);
    flats(flat);
    forests(forest);
    return result;
};

function Closure(power){
    return function(number){
	var holder = 1;
	for(var count = 1; count <= power; count ++){
	    holder = holder * number;
	}
	return holder;
    };
}

num();
FizzBuzzCracklePop();
console.log(Landscape(5,4,3,2));
var test = Closure(3);
console.log(test(2));
