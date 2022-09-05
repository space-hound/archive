var PuncteleVietii;

function generatePoints(width, height, no){
	let points = [];

	for(let i = 0; i < no; i++){
		let rho = random();
		let phi = random(TWO_PI);

		let x = ( cos(phi) * sqrt(rho) ) * (random(width - 100) * 0.5) + (width / 2);
		let y = ( sin(phi) * sqrt(rho) ) * (random(height - 100) * 0.5) + (height / 2);

		let point = new Point(x, y);
		points.push(point);
	}

	return points;
}

function JarvisHull(points){

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

			if(Orientation(points[p], points[i], points[q]) == 2){
				q = i;
			}
		}

		ResetCanvas(points, HullPoints);

		p = q;

	} while(p != leftMostPoint);

	return HullPoints;
}

function INIT(){
	noLoop();

	parentElement = document.getElementById('parent');
	canvasWidth = parentElement.clientWidth * 0.8;
	canvasHeight = parentElement.clientHeight * 0.95;
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.id('display');
	canvas.parent(parentElement);

	PuncteleVietii = generatePoints(canvasWidth, canvasHeight, 300);

	background(202);

	for(let i = 0; i < PuncteleVietii.length; i++){
		PuncteleVietii[i].show();
	}

	LinesOneByOne(JarvisHull(PuncteleVietii, true));
}
