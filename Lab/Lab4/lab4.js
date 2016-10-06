//lab 4
//problem 1
console.log("Problem 1:");
var stringToArray = function(input){
    return holder = input.split(" ");
}

function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}
function inner(input){
    try{
	if(getRandomNumber(1,4) < 4){
	    console.log(stringToArray(input));
	}
	else{
	    throw new brokenError("Broken!");
	}
    }
    catch(e){
	console.log(e);
    }
}

//problem 2
console.log();
console.log("Problem 2:");
function brokenError(message){
    this.message = message;
    this.stack = (new Error()).stack;
}

brokenError.prototype = Object.create(Error.prototype);
brokenError.prototype.name = "brokenError";


//problem 3
console.log();
console.log("Problem 3: ");
function outerWrapper(innerWrapper){
    while(true){
	try{
	    return stringToArray(innerWrapper);
	    break;
	}catch(e){
	    
	}
    }
}



var sentence1 = "this is sentence one";
var sentence2 = "this is sentence two";
var sentence3 = "this is sentence two";
console.log(outerWrapper(sentence1));