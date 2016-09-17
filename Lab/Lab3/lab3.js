//problem 1
var array = [[1,2],[3,4],[5,6]];

console.log(array);
console.log(array.reduce(function(a,b){
	    return a.concat(b);
	}));


//problem 2
var people = [
	      {"name" : "Barbs", "year" : "1940"},
	      {"name" : "Gary", "year" : "1935"},
	      {"name" : "Gabriel", "year" : "1943"},
	      {"name" : "Rudy", "year" : "1955"},
	      {"name" : "Levin", "year" : "1967"},
	      {"name" : "Mark", "year" : "1975"},
	      {"name" : "Matthew", "year" : "1978"},
	      {"name" : "Karen", "year" : "1994"},
	      {"name" : "Ray", "year" : "1904"},
	      {"name" : "Misty", "year" : "2000"},
	      {"name" : "Ash", "year" : "2005"},
	      {"name" : "Maggie", "year" : "1997"},
	      {"name" : "Bart", "year" : "1991"},
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