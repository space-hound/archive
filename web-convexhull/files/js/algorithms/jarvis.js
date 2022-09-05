async function JarvisHull(points){
	PointsDisplay(points);

	if(points.length < 3){
		return null;
	}

	let HullPoints = [];

	let leftMostPoint = 0;

	for(let i = 1; i < points.length; i++){
		if(points[i].X < points[leftMostPoint].X){
			leftMostPoint = i;
		}
	}

	let p = leftMostPoint;
	let q;

	do{
		HullPoints.push(points[p]);
		q = (p + 1) % points.length;

		for(let i = 0; i < points.length; i++){

			await sleep(speedJ);
			strokeWeight(3);
			stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
			SlowLine(points[p], points[i]);

			if(Orientation(points[p], points[i], points[q]) == 2){
				q = i;
			}
		}

		ResetCanvas(points, HullPoints);

		p = q;

	} while(p != leftMostPoint);


	LinesOneByOne(HullPoints, true);
}

function startJarvis(){
	reINIT();

	background(202);

	startPoints = RandomPointGenerator(canvasWidth, canvasHeight, noPoints);

	JarvisHull(startPoints);
}

function INIT(){
	noLoop();

	parentElement = document.getElementById('parent');
	canvasWidth = parentElement.clientWidth * 0.8;
	canvasHeight = parentElement.clientHeight * 0.95;
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.id('display');
	canvas.parent(parentElement);

	PuncteleVietii = RandomPointGenerator(canvasWidth, canvasHeight, 125);

	background(202);

	for(let i = 0; i < PuncteleVietii.length; i++){
		PuncteleVietii[i].show();
	}

	LinesOneByOne(JarvisHull(PuncteleVietii, true));
}