var answer = prompt("What's your age?");
for (var i = 1; i <= answer; i ++) {

	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	} 
	else if (i % 5 === 0) 
		{console.log("Buzz")}
	else if (1 % 3 === 0) 
		{console.log("Fizz");}
	else 
		{console.log(i)}

};
