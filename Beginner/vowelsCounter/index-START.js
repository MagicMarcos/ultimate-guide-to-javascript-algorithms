/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const vowels = ['a', 'e', 'i', 'o', 'u'];
function vowelsCounter(text) {
	// Initialize counter
	let counter = 0;

	for (let letter of text.toLowerCase()) {
		if (vowels.includes(letter)) {
			counter++;
		}
	}

	// Return number of vowels
	return counter;
}
function vowelsCounter(text) {
	// The regular expression specifies the letters to be looked for within the brackets[]. For simple patterns, Regular expressions are usually defined within a pair of slashes. Notice the characters gi trailing the closing slash?
	// g stands for a global search which means that after finding the first match, it will not start over from the beginning but continue searching from the end of the previous match.
	// i stands for case insensitive search which makes the whole expression case-insensitive (for example /xyz/i would match XyZ).
	let matchingInstances = text.match(/[aeiou]/gi);

	// Check if matching instances exist then calculate length
	if (matchingInstances) {
		// Return number of vowels
		return matchingInstances.length;
	} else {
		return 0;
	}
}
module.exports = vowelsCounter;
