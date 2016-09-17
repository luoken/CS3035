//problem 1
var array = [[1,2],[3,4],[5,6]];

console.log(array);
var finishArray = array.reduce(function(a,b){
	return a.concat(b);
    },0);

console.log(finishArray);

//problem 2




/*
function test(people){
    return function(people){
	if(people.year <= 1940){
	    people.generation = "Greatest Generation";
	}
	else if(people.year >= 1941 && people.year <= 1965){
	    people.generation = "Baby Boomers";
	}
	else if(people.year >= 1966 && people.year <= 1976){
	    people.generation = "Generation X";
	}
	else if(people.year >= 1977 && people.year <= 1995){
	    people.generation = "Generation Y";
	}
	else{
	    people.generation = "Millenials";
	}
    }
}
*/
//var holdingVariable = people.map(people, test(people));

var people = [
	      {"name" : "Black Chair", "sex" : "m", "year" : "1940"},
	      {"name" : "Green Bottle", "sex" : "f", "year" : "1935"},
	      {"name" : "Gray Watch", "sex" : "m", "year" : "1943"},
	      {"name" : "Red Book", "sex" : "f", "year" : "1955"},
	      {"name" : "Levin Perez", "sex" : "f", "year" : "1967"},
	      {"name" : "Mark Kim", "sex" : "m", "year" : "1975"},
	      {"name" : "Matthew Johnson", "sex" : "m", "year" : "1978"},
	      {"name" : "Karen Chen", "sex" : "f", "year" : "1994"},
	      {"name" : "Ray Chan", "sex" : "m", "year" : "1904"},
	      {"name" : "Misty Brock", "sex" : "f", "year" : "2000"},
	      {"name" : "Ash Ketchum", "sex" : "m", "year" : "2005"},
	      {"name" : "Maggie Simpson", "sex" : "f", "year" : "1997"},
	      {"name" : "Bart Simpson", "sex" : "m", "year" : "1991"},
	      ]

    /*
    console.log(people);
test(people);
console.log(holdingVariable);


*/