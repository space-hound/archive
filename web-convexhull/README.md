# web-convexhull

<br>

 - [Online Project Here](https://space-hound.github.io/web-convexhull/)

<br>

This was a project for Computational Geometry. [Convex Hull](https://en.wikipedia.org/wiki/Convex_hull) of a set of N points randomly generated inside an ellipse.  The project was made using [p5js](https://p5js.org/). 

<br>

> In mathematics, the convex hull or convex envelope or convex closure of a set X of points in the Euclidean plane or in a Euclidean space (or, more generally, in an affine space over the reals) is the smallest convex set that contains X.

<br>

<p align="center">
	<img src="https://media.geeksforgeeks.org/wp-content/uploads/ConvexHull.png">
<p/>

Convex Hull Algorithms:

<br>

 - [Jarvis](https://www.geeksforgeeks.org/convex-hull-set-1-jarviss-algorithm-or-wrapping/)
    - For `Jarvis` the process of finding the convex hull is displayed somehow in real time, with a delay between each step of the algorithm. I had to use `async/await` in order to achieve this effect:

```javascript
function  sleep(miliseconds) {
	return  new  Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve();
		}, miliseconds);
	});
}

async  function  wait(){
	await  sleep(SecondSleep);
}
```

<br>

 - [Quick Hull](https://www.geeksforgeeks.org/quickhull-algorithm-convex-hull/)
   - For the `Quick Hull`, unfortunately I could not achieve this effect, as I could not manage to combine `recursion` with the `p5.js` functionality, so when a step of the algorithm is completed,  the data, computations and things relevant to the animations are stored in some arrays. And when it finishes, it triggers the drawing function, that will draw the algorithm based on the previous arrays, with a delay between each step, using the `sleep` and `wait` functions above.

```javascript
let  AllPoints  = [];
let  QuickHullSteps  = [];
let  QuickHullPoints  = [];
let  QuickHullReset  = [];
```

<br>

 - [Graham Scan](https://www.geeksforgeeks.org/convex-hull-set-2-graham-scan/)
   - It is not implemented in my project.
