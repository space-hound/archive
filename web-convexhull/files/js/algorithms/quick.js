let AllPoints = [];
let QuickHullSteps = [];
let QuickHullPoints = [];
let QuickHullReset = [];

function getMaxPoint(points){
	let maxPoint = points[0];

	for(let i = 1; i < points.length; i++){
		if(points[i].X > maxPoint.X){
			maxPoint = points[i];
		}
	}

	return maxPoint;
}

function getMinPoint(points){
	let minPoint = points[0];

	for(let i = 1; i < points.length; i++){
		if(points[i].X < minPoint.X){
			minPoint = points[i];
		}
	}

	return minPoint;
}

function calculateDistanceIndicator(start, end, arbitrary){
	let p = new Point(end.X - start.X, end.Y - start.Y);
	let q = new Point(arbitrary.X - start.X, arbitrary.Y - start.Y);

	return ((q.Y * p.X) - (q.X * p.Y));
}

function getPointDistanceIndicators(start, end, arbitraryPoints){
	let newPoints = [];

	for(let i = 0; i < arbitraryPoints.length; i++){
		let newDistance = calculateDistanceIndicator(start, end, arbitraryPoints[i]);

		if(newDistance > 0){
			let newObj = new Object();
			newObj['distance'] = newDistance;
			newObj['point'] = arbitraryPoints[i];
			newPoints.push(newObj);
		}
	}

	return newPoints;
}

function getPointWithMaximumDistanceFromLine(arr){
	let maxD = 0;
	let maxP = null;

	for(let i = 0; i < arr.length; i++){
		if(arr[i]['distance'] > maxD){
			maxD = arr[i]['distance'];
			maxP = arr[i]['point'];
		}
	}

	return maxP;
}

function getPointsFromPointDistanceSet(arr){
	let newArr = [];

	for(let i = 0; i < arr.length; i++){
		newArr.push(arr[i]['point']);
	}

	return newArr;
}

function quickHull(points, start, end){

    let pointsOfLeft = getPointDistanceIndicators(start, end, points);
    let newMaxPoint = getPointWithMaximumDistanceFromLine(pointsOfLeft);

    if(newMaxPoint == null){
    	let newArr = [];
    	newArr.push(end);
    	QuickHullSteps.push([start, end]);
    	QuickHullPoints.push(end);
    	return newArr;
    }

    QuickHullSteps.push([start, end, newMaxPoint]);

    let newPoints = getPointsFromPointDistanceSet(pointsOfLeft);

    let right = quickHull(newPoints, start, newMaxPoint);
    let left = quickHull(newPoints, newMaxPoint, end);

    return mergeArray(right, left);
}

function getQuickHull(points){
	AllPoints = points;

	let HullPoints = [];

	let max = getMaxPoint(points);
	let min = getMinPoint(points);

	QuickHullSteps.push([min, max]);

	let right = quickHull(points, min, max);
	let left = quickHull(points, max, min);

	HullPoints = mergeArray(right, left);

	//return  HullPoints;
}

function mergeArray(arr1, arr2){
	let newArr = [];

	if(Array.isArray(arr1) && Array.isArray(arr1)){
		for(let i = 0; i < arr1.length; i++){
			newArr.push(arr1[i]);
		}

		for(let i = 0; i < arr2.length; i++){
			newArr.push(arr2[i]);
		}

	}else if(Array.isArray(arr1) && !Array.isArray(arr2)){
		for(let i = 0; i < arr1.length; i++){
			newArr.push(arr1[i]);
		}

		newArr.push(arr2);

	}else if(!Array.isArray(arr1) && Array.isArray(arr2)){
		for(let i = 0; i < arr2.length; i++){
			newArr.push(arr2[i]);
		}

		newArr.push(arr1);

	}
	else{
		newArr.push(arr1);
		newArr.push(arr2);
	}

	return newArr;
}

async function drawQuickHull(){
	PointsDisplay(AllPoints);

	await sleep(speedQ);
	stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
	SlowLine(QuickHullSteps[0][0], QuickHullSteps[0][1]);

	for(let i = 1; i < QuickHullSteps.length; i++){

		if(QuickHullSteps[i].length == 3){
			await sleep(speedQ);
			stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
			SlowLine(QuickHullSteps[i][0], QuickHullSteps[i][1]);
			SlowLine(QuickHullSteps[i][0], QuickHullSteps[i][2]);
		}
		else{
			await sleep(speedQ);
			stroke(Color.Green()[0], Color.Green()[1], Color.Green()[2]);
			SlowLine(QuickHullSteps[i][0], QuickHullSteps[i][1]);
		}
	}

	ResetCanvas(AllPoints, QuickHullPoints);

	let cond = true;

	for(let i = QuickHullSteps.length - 1; i >= 0; i--){
		if(QuickHullSteps[i].length == 3){
			ResetCanvas(AllPoints, QuickHullPoints);
			for(let j = 0; j <= i; j++){
				if(QuickHullSteps[j].length == 3){
					strokeWeight(3);
					stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
					SlowLine(QuickHullSteps[j][0], QuickHullSteps[j][1]);
					SlowLine(QuickHullSteps[j][0], QuickHullSteps[j][2]);
				}
			}

			if(cond){
				cond = false;
			}else{
				await sleep(speedQ / 2);
			}
		}
	}

	ResetCanvas(AllPoints, QuickHullPoints);

	AllPoints = [];
	QuickHullPoints = [];
	QuickHullSteps = [];
	QuickHullReset = [];
}

function startQuick(){
	reINIT();

	background(202);

	startPoints = RandomPointGenerator(canvasWidth, canvasHeight, noPoints);

	getQuickHull(startPoints);
	drawQuickHull();
}

function INIT(){
	noLoop();

	parentElement = document.getElementById('parent');
	canvasWidth = parentElement.clientWidth * 0.8;
	canvasHeight = parentElement.clientHeight * 0.95;
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.id('display');
	canvas.parent(parentElement);

	startQuick();
}