/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//we subtract the length of the second word from that to the first. This gives us a positive, negative or 0 value that determines which word is longer and by extension which should come before the other.

function longestWord(text) {
	var sortedArray = text
		.split(' ')
		.sort((wordA, wordB) => wordB.length - wordA.length);
	return sortedArray[0];
}

module.exports = longestWord;
