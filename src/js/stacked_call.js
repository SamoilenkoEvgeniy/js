let sum = (arg) => {

	let _sum = arg;

	function F(b) {
		_sum += b;
		return F;
	}

	F.toString = () => {
		return _sum;
	};

	return F;

};

console.log(sum(3)(3)(3)(3));

// worked
// const sum = (a, f = (b) => sum(a + b)) => ((f.valueOf = () => a), f);
