// require('./stacked_call.js');
// console.log('------');
// require('./timeouts.js');
// console.log('------');
// require('./test.js');
// console.log('------');
// require('./inheritance.js');
// console.log('------');
// require('./closures.js');
// console.log('------');
// require('./context.js');
// console.log('------');
// require('./scope.js');
// console.log('------');
// require('./prototype.js');
// console.log('------');
// require('./links.js');

const valid = "[{(())}]";
const valid1 = "[(){}()]";
const valid2 = "[({(}))]";
const inValid = "[{())}]";

function balanced(str) {
	for (let i = 0; i < str.length; i++) {
		console.log(str[i]);
	}
}

balanced(valid1);