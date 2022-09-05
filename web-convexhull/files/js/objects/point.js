class Point{
	constructor(x, y, r, color, stroke){
		this._x = x;
		this._y = y;

		if(typeof(r) == 'undefined'){
			this._r = 10;
		}
		else{
			this._r = r;
		}

		if(typeof(color) == 'undefined'){
			this._color = new Color(Color.Black()[0], Color.Black()[1], Color.Black()[2]);
		}
		else{
			this._color = stroke;
		}

		if(typeof(stroke) == 'undefined'){
			this._stroke = new Color(Color.Red()[0], Color.Red()[1], Color.Red()[2]);
		}
		else{
			this._stroke = stroke;
		}
	}

	set X(value){
		this._x = value;
	}

	set Y(value){
		this._y = value;
	}

	set XY(value){
		this._x = value[0];
		this._y = value[1];
	}

	set R(value){
		this._r = value;
	}

	set XYR(value){
		this._x = value[0];
		this._y = value[1];
		this._r = value[2];
	}

	set C0l0r(value){
		this._color.c0l0r = value;
	}

	set Str0ke(value){
		this._stroke.c0l0r = value;
	}

	get X(){
		return this._x;
	}

	get Y(){
		return this._y;
	}

	get XY(){
		return [this._x, this._y];
	}

	get R(){
		return this._r;
	}

	get XYR(){
		return [this._x, this._y, this._r];
	}

	get C0l0r(){
		return this._color;
	}

	get Str0ke(){
		return this._stroke;
	}

	show(){
		let mouseOver = false; //(dist(this._x, this._y, mX, mY) < this._r) ? true : false;
		if(mouseOver){
			strokeWeight(2);
			stroke(Color.Black()[0], Color.Black()[1], Color.Black()[2]);
			fill(Color.Green()[0], Color.Green()[1], Color.Green()[2]);
			ellipse(this._x, this._y, this._r + 3);
		}
		else{
			strokeWeight(2);
			stroke(this._stroke.c0l0r['r'], this._stroke.c0l0r['g'], this._stroke.c0l0r['b']);
			fill(this._color.c0l0r['r'], this._color.c0l0r['g'], this._color.c0l0r['b']);
			ellipse(this._x, this._y, this._r + 3);
		}
	}
}