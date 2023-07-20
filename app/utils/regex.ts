
const whitespace = /\s/g;
const nonAlphaNum = /[^a-z0-9-]/gi;

const regExpPattern = new RegExp(
	'(\\' + [
		'/', '.', '*', '+', '?', '|',
		'(', ')', '[', ']', '{', '}', '\\'
		].join('|\\') + ')', 'g'
);

export function trim(text: string, seq: string) {
	var pattern = seq.replace(regExpPattern, '\\$1');
	return text
		.replace(new RegExp("^"+pattern), "")
		.replace(new RegExp(pattern+"$"), "")
		.replace(new RegExp("("+pattern+"){2,}", "g"), seq);
};

// let setImmediate = function(cb: () => void) { cb(); };

// if(typeof process !== 'undefined' && typeof process.nextTick === 'function') {
	// setImmediate = process.nextTick;
// }

