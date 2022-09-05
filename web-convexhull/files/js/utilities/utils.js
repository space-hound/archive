function sleep(miliseconds) {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve();
		}, miliseconds);
	});
}

async function wait(){
	await sleep(SecondSleep);
}

async function waitX2(p, q){
	await sleep(SecondSleep);
	stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
	SlowLine(p, q);
}

async function waitX3(p, q, r){
	await sleep(SecondSleep);
	stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
	SlowLine(p, q);
	SlowLine(p, r);
}

function reloadPage(){
	window.location.reload(true);
}

function RandomPointGenerator(width, height, no){
	let points = [];

	for(let i = 0; i < no; i++){
		let rho = random();
		let phi = random(TWO_PI);

		let x = ( cos(phi) * sqrt(rho) ) * (width / 2 - width * 0.1) + (width / 2);
		let y = ( sin(phi) * sqrt(rho) ) * (height / 2 - height * 0.1) + (height / 2);

		let point = new Point(x, y);
		points.push(point);
	}

	return points;
}

function Random(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Orientation(p, q, r){
	let orientation = (q.Y - p.Y) * (r.X - q.X) - (q.X - p.X) * (r.Y - q.Y);

	if(orientation == 0){
		return 0;
	}
	else if(orientation > 0){
		return 1;
	}
	else{
		return 2;
	}
}

async function LinesOneByOne(points, final){
	for(let i = 0; i < points.length; i++){

		if(final){
			strokeWeight(5);
			stroke(Color.Green()[0], Color.Green()[1], Color.Green()[2]);
		}
		else{
			strokeWeight(3);
			stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
		}

		if(i < points.length - 1){
			SlowLine(points[i], points[i+1]);
		}
		else{
			SlowLine(points[i], points[0]);
		}
	}
}

function squareDist(p, q){
	return (Math.pow((p.X - q.X), 2) - Math.pow((p.Y - q.Y), 2));
}

function secondTop(arr){
	return arr[arr.length - 2];
}

function PolarSort(arr, x){
	arr.sort(function(a, b){
		let orr = Orientation(x, a, b);

		if(orr == 0){
			return (squareDist(x, b) >= squareDist(x, a) ? -1 : 1);
		}

		return (orr == 2) ? -1 : 1;
	});
}

function customCompare(con, a, b){
	let orr = Orientation(con, a, b)
}


function PointsDisplay(points){
	for(let i =0; i < points.length; i++){
		points[i].show();
	}
}

function SlowLine(p, q){
	line(p.X, p.Y, q.X, q.Y);
}

function ResetCanvas(points, hullPoints){
	background(202);
	PointsDisplay(points);
	LinesOneByOne(hullPoints, true);
}

function Greset(){
	background(202);
	PointsDisplay(GPoints);
	if(GHull.length > 1){
		LinesOneByOne(GHull, true);
	}
}

function CopySortX(arr){
	let newArr = arr;

	return newArr.sort(function(a, b){
		return a.X - b.X;
	});
}

function CopySortY(arr){
	let newArr = arr;

	return newArr.sort(function(a, b){
		return a.Y - b.Y;
	});
}

function SortX(arr){
	arr.sort(function(a, b){
		return a.X - b.X;
	});
}

function SortY(arr){
	arr.sort(function(a, b){
		return a.Y - b.Y;
	});
}

function init(){
	noLoop();
	//noPointsInput = document.getElementById('points');
	//noPoints = noPointsInput.value;
	//speedInput = document.getElementById('speed');
	//speed = speedInput.value;

	parentElement = document.getElementById('parent');
	canvasWidth = parentElement.clientWidth * 0.8;
	canvasHeight = parentElement.clientHeight * 0.95;
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.id('display');
	canvas.parent(parentElement);
}

function reINIT(){
	//noPointsInput = document.getElementById('points');
	//noPoints = noPointsInput.value;
	//speedInput = document.getElementById('speed');
	//speed = speedInput.value;

	background(202);

}