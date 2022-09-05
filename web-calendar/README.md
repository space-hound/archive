# web-calendar

 - [Live Demo Here!](https://space-hound.github.io/web-calendar/)
<br>

> Not a ToDo App!

This is the first thing I have done in `JavaScript`, it was meant to be some sort of stand alone plugin/input, where you can select a single date or interval of dates. The days/months are generated based on the current date when the code is executed:
```javascript
const  TODAY  =  new  Date();
const  TD  = [TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()];
```
And the rest are generated based on the current date when something like month/year are changed. And of course [the leap year algorithm](https://en.wikipedia.org/wiki/Leap_year#Algorithm):
```javascript
function  isLeap(year, month) {
	if (month  !==  1) {
		return  1;
	}
	
	if (year  %  4  ===  0) {
		if (year  %  100  ===  0) {
			if (year  %  400  ===  0) {
				return  2;
			} else {
				return  1;
			}
		} else {
			return  2;
		}
	} else {
		return  1;
	}
}
```
