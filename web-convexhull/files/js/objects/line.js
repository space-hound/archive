class Linie{
	constructor(p, q){
		this._p = p;
		this._q = q;
	}

	show(){
		stroke(Color.Yellow()[0], Color.Yellow()[1], Color.Yellow()[2]);
		line(this._p.X, this._p.Y, this._q.X, this._q.Y);
	}

	del(){
		
	}
}