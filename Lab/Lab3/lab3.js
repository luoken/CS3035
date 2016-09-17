//problem 1
var array = [[1,2],[3,4],[5,6]];

console.log(array);
console.log(array.reduce(function(a,b){
	    return a.concat(b);
	}));


//problem 2
var people = [
	      {"firstName" : "Barbs", "lastName": "Rodriguez", "year" : "1940"},
	      {"firstName" : "Gary", "lastName": "Te", "year" : "1935"},
	      {"firstName" : "Gabriel", "lastName" : "Sanchez", "year" : "1943"},
	      {"firstName" : "Rudy", "lastName": "Gomez", "year" : "1955"},
	      {"firstName" : "Levin", "lastName" : "Kim", "year" : "1967"},
	      {"firstName" : "Mark", "lastName": "Yap", "year" : "1975"},
	      {"firstName" : "Matthew", "lastName": "Johnson", "year" : "1978"},
	      {"firstName" : "Karen", "lastName": "Chen", "year" : "1994"},
	      {"firstName" : "Ray", "lastName": "Chan", "year" : "1904"},
	      {"firstName" : "Misty", "lastName": "RedHead", "year" : "2000"},
	      {"firstName" : "Ash", "lastName": "Ketchum", "year" : "2005"},
	      {"firstName" : "Maggie", "lastName": "Simpson", "year" : "1997"},
	      {"firstName" : "Bart", "lastName" : "Simpson", "year" : "1991"},
	      ]

    people.forEach(function(temp){
	    if(parseInt(temp.year) <= parseInt(1940)){
		temp.generation = "Greatest Generation";
	    }
	    else if(parseInt(temp.year) >= parseInt(1941) && parseInt(temp.year) <= parseInt(1965)){
		temp.generation = "Baby Boomers";
	    }
	    else if(parseInt(temp.year) >= parseInt(1966) && parseInt(temp.year) <= parseInt(1976)){
		temp.generation = "Generation X";
	    }
	    else if(parseInt(temp.year) >= parseInt(1977) && parseInt(temp.year) <= parseInt(1995)){
		temp.generation = "Generation Y";
	    }
	    else{
		temp.generation = "Millenials";
	    }
	});

console.log(people);


//problem 3