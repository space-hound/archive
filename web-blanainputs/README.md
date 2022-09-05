# web-blanainputs

[Live Demo Here!](https://space-hound.github.io/web-blanainputs/)

This is a collection of 5 inputs made from scratch using pure JavaScript and SCSS.
 - [Text](#text-input)
 - [Numeric](#numerical-input)
 - [Interval](#interval-input)
 - [Carousel](#carousel)
 - [Select](#select-input)
 - [Submit](#submit-input)

## Text Input

This is just a basic text input with a custom style.

 - [blana-text.js](https://github.com/space-hound/web-blanainputs/blob/master/src/js/BlanaText/_blana-text.js)
- [blana-text.scss](https://github.com/space-hound/web-blanainputs/blob/master/src/scss/BlanaText/blana-text.scss)

<p align="center">
	<img src="https://i.imgur.com/J39aynq.png" alt="logo">
<p/>

<p align="center">
	<img src="https://i.imgur.com/NDdOnpX.gif" alt="logo">
<p/>

```html
<div class="blana blana-text blana-night">
	<input type="text" id="blana-text-1">
	<label for="blana-text-1">textlabel</label>
</div>
```

```javascript
const blanaText = BlanaText(document.querySelector(".temp-blana-text"));

// get or set the value
blanaText.value([value]);

// returns the length of the input's string value
blanaText.length();

// clear the input
blanaText.clear();
```

## Numerical Input

A custom numerical input, that can be restricted to a certain interval eg: [-1000, 1000]. Also while it has focus, it's value can be incremented or decremented by the mouse wheel by a given value, or default 1.

 - [blana-numeric.js](https://github.com/space-hound/web-blanainputs/blob/master/src/js/BlanaNumeric/_blana-numeric.js)
- [blana-numeric.scss](https://github.com/space-hound/web-blanainputs/blob/master/src/scss/BlanaNumeric/blana-numeric.scss)

<p align="center">
	<img src="https://i.imgur.com/thCgE6a.png">
<p/>

<p align="center">
	<img src="https://i.imgur.com/zoDCeB6.gif">
<p/>

```html
<div class="blana blana-numeric blana-night temp temp-blana-numeric">
	<input type="text" id="blana-number-1">
	<label for="blana-number-1">numberlabel</label>
</div>
```

```javascript
const  defaults = {
	allowNegatives: true,
	increment: 1,
	min: -1000,
	max: 1000
}

const blanaNumeric = BlanaNumeric(document.querySelector(".temp-blana-numeric"), defaults);

// get or set the value
blanaNumeric.value([value]);

// returns the length of the input's string value
blanaNumeric.length();

// clear the input
blanaNumeric.clear();
```

## Interval Input

A interval input made from two numerical inputs with some additional logic, with options for min and max.

 - [blana-interval.js](https://github.com/space-hound/web-blanainputs/blob/master/src/js/BlanaInterval/_blana-interval.js)
- [blana-interval.scss](https://github.com/space-hound/web-blanainputs/blob/master/src/scss/BlanaInterval/blana-interval.scss)

<p align="center">
	<img src="https://i.imgur.com/E1UQ6BN.png">
<p/>

<p align="center">
	<img src="https://i.imgur.com/4sc1mki.gif">
<p/>

```html
<div  class="blana blana-interval blana-night temp temp-blana-interval">
	<div class="blana blana-numeric blana-night">
		<input type="text" id="blana-numeric-2">
		<label for="blana-numeric-2">minlabel</label>
	</div>
	
	<div class="blana-hr-line"></div>
	
	<div class="blana blana-numeric blana-night">
		<input type="text" id="blana-numeric-3">
		<label for="blana-numeric-3">maxlabel</label>
	</div>
</div>
```

```javascript

const  defaults = {
	min: {
		allowNegatives: true,
		increment: 1,
		min: -1000,
	},
	max: {
		allowNegatives: true,
		increment: 1,
		max: 1000
	}
}

const blanaInterval = BlanaInterval(document.querySelector(".temp-blana-interval"), defaults);

// get or set the value - a two elemnts array - [min, max]
blanaInterval.value([value]);

// the min numerical input
blanaInterval.min;

// the max numerical input
blanaInterval.max
```

## Carousel

This is just a text carousel that is used at the select input.

 - [blana-carousel.js](https://github.com/space-hound/web-blanainputs/blob/master/src/js/BlanaCarousel/_blana-carousel.js)
- [blana-carousel.scss](https://github.com/space-hound/web-blanainputs/blob/master/src/scss/BlanaCarousel/blana-carousel.scss)

<p align="center">
	<img src="https://i.imgur.com/bp3LUjW.png" alt="logo">
<p/>

<p align="center">
	<img src="https://i.imgur.com/0fXJxnM.gif" alt="logo">
<p/>

```html
<div  class="blana blana-carousel blana-night temp temp-blana-carousel">
	<div  class="blana-arrow blana-arrow-left">
		<div></div>
		<div></div>
		<div></div>
	</div>

	<div  class="blana-carousel-content">
		<div  class="blana-slider">
			<div  class="blana-slider-content">
				<p>Slide 1</p>
			</div>
			<div  class="blana-slider-content">
				<p>Slide 2</p>
			</div>
			<div  class="blana-slider-content">
				<p>Slide 3</p>
			</div>
		</div>
	</div>
	
	<div  class="blana-arrow blana-arrow-right">
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
```

```javascript
let blanaCarousel = BlanaCarousel(document.querySelector(".temp-blana-carousel"));

// get or set the current index
blanaText.setCurrent([index]);
```

## Select Input

A custom select input made with the custom carousel.

 - [blana-select.js](https://github.com/space-hound/web-blanainputs/blob/master/src/js/BlanaSelect/_blana-select.js)
- [blana-select.scss](https://github.com/space-hound/web-blanainputs/blob/master/src/scss/BlanaSelect/blana-select.scss)

<p align="center">
	<img src="https://i.imgur.com/feIFy6o.png">
<p/>

<p align="center">
	<img src="https://i.imgur.com/pYHb3ha.gif">
<p/>

```html
<div class="blana blana-select blana-night temp temp-blana-select">
	<select id="blana-select-1">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
		<option value="6">Option 6</option>
	</select>
	
	<label for="blana-select-1">select</label>
	
	<div class="blana-select-status">
		<span class="current">1</span> / <span class="count">4</span>
	</div>
</div>
```

```javascript
let blanaSelect = BlanaSelect(document.querySelector(".temp-blana-select"));

// get or set the current index
blanaSelect.selected([index]);

// get the selected value
blanaSelect.selectedValue();
```

## Submit Input

This is just a custom style for a submit input button, it has no logic attached.

 - [blana-submit.scss](https://github.com/space-hound/web-blanainputs/blob/master/src/scss/BlanaSubmit/blana-submit.scss)

<p align="center">
	<img src="https://i.imgur.com/nyvRpuQ.gif">
<p/>

```html
<div class="blana blana-submit blana-night temp">
	<input type="submit" value="Finish">
</div>
```

