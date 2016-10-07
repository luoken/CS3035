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
inner("This class is awesome");

//problem 2
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
var sentence3 = "this is sentence three";
console.log(outerWrapper(sentence1));

console.log();
console.log("test");
console.log(stringToArray(sentence1));
var arrayOfStrings = [sentence1, sentence2, sentence3];
//problem 4
console.log();
console.log("Problem 4");
function test(arrayOfStrings){

    var arrayHolder = [];
//    for(var i = 0; i < arrayOfStrings.length; i++){

	if(String(outerWrapper(arrayOfStrings[0])) == String(sentence1.split(" "))){
	    arrayHolder.push('True');
	}
	else{
	    arrayHolder.push('False');
	}
	if(String(outerWrapper(arrayOfStrings[1])) == String(sentence2.split(" "))){
	    arrayHolder.push('True');
	}
	else{
	    arrayHolder.push('False');
	}
	if(String(outerWrapper(arrayOfStrings[2])) == String(sentence3.split(" "))){
	   arrayHolder.push('True');
	}
	else{
	    arrayHolder.push('False');
	}
//    }
    
    console.log(arrayHolder.length);
    
    for(var temp = 0; temp < arrayHolder.length; temp++){
	console.log("Sentence " + (temp + 1) + ": " + arrayHolder[temp]) ;
    }

}

test(arrayOfStrings);