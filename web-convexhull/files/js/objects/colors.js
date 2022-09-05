class Color {
	constructor(r, g, b){
		this._cArr = new Array(3);
		this._cArr['r'] = r;
		this._cArr['g'] = g;
		this._cArr['b'] = b;
	}

	get c0l0r(){
		return this._cArr;
	}


	/*      
		NEED TO VERIFY FOR 3 VALUES IN ARRAY
		NEED TO CLAMP VALUES BETWEEN 0 AND 255
	*/

	set c0l0r(colorValue){
		if(Array.isArray(colorValue)){
			this._cArr['r'] = colorValue[0];
			this._cArr['g'] = colorValue[1];
			this._cArr['b'] = colorValue[2];
		}
		else if(typeof colorValue == 'number'){
			this._cArr['r'] = colorValue;
			this._cArr['g'] = colorValue;
			this._cArr['b'] = colorValue;
		}
		else{
			this._cArr['r'] = 0;
			this._cArr['g'] = 0;
			this._cArr['b'] = 0;
		}
	}

	static Black(){
		return [33, 33, 33];
	}

	static Grey(){
		return [175, 175, 175];
	}

	static White(){
		return [245, 245, 245];
	}

	static Red(){
		return [183, 28, 28];
	}

	static Blue(){
		return [54, 79, 199];
	}

	static Green(){
		return [12, 178, 14];
	}

	static Yellow(){
		return [255, 193, 7];
	}
}