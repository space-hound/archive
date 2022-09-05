# web-snake

[Live Demo Here!](https://space-hound.github.io/web-fizzbuzz/)

> 1 2 fizz 4 buzz fizz 7 8 fizz buzz...

This is visually representation of the fizz buzz programming problem. After I watched [this video](https://www.youtube.com/watch?v=QPZ0pIK_wsc&t=1s) I made my [own implementation](https://github.com/space-hound/web-fizzbuzz/blob/master/console%20fizzbuzz.js) and after that I wanted to represent it visually, and I came up with this.

<hr>

 - My console version:
```javascript
const FIZZBUZZ = {

	CHECKERS: null,

	LOOKUP_TABLE: {
		0: "",
		3: "FIZZ",
		5: "BUZZ",
		7: "RAZZ",
	},

	modulo( number, check ) {
		if( (check !== 0) && (number % check === 0) ) {
			
			return this.LOOKUP_TABLE[check];
		}
		
		return this.LOOKUP_TABLE[0];
	},

	checkNumber( number ) {
		let string = "";
		
		this.CHECKERS.forEach( check => {
			string += this.modulo(number, check);
		});
		
		if(string !== "") {
			return string;
		}
		return number;
	},

	fizzBuzz( from = 1, to = 100 ) {
	
		this.CHECKERS = Object.keys(this.LOOKUP_TABLE).map( check => parseInt(check));
		
		for(let i = from; i <= to; i++) {
			console.log(this.checkNumber(i));
		}
	}
}
```
