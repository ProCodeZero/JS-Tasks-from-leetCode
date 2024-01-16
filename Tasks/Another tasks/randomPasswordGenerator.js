let passwordLength = 10;
let includeUpperCase = true;
let includeLowerCase = true;
let includeChar = true;
let includeSymbols = true;

// document.querySelector('.btn').addEventListener('click', generatePassword);

function generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeChar, includeSymbols) {

	let password = '';
	let allowedChars = '';

	let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
	let numbers = '1234567890';
	let symbols = '!@#$%^&*()?-_=+';

	includeUpperCase ? allowedChars += upperCaseLetters : upperCaseLetters = '';
	includeLowerCase ? allowedChars += lowerCaseLetters : lowerCaseLetters = '';
	includeChar ? allowedChars += numbers : numbers = '';
	includeSymbols ? allowedChars += symbols : symbols = '';

	for (let i = 0; i < passwordLength; i++) {
		password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
	}
	
	return password;
}

console.log(generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeChar, includeSymbols));