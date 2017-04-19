console.log("string.js loaded");
function validate() {
	if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
}
function reversal(string) {
	return string.split("").reverse().join("");
}

function alphabits(string) {
	return string.split("").sort().join("");
}

function palindrome(string) {
	string = string.split("");
	for (n=0; n<(string.length)/2; n+=1) {
		if (string[n] != string[(string.length-1)-n]) {
			return false;
		}
	}
	return true;
}

var testString = "Drop down flip it and reverse it";
console.log(testString);
reversal(testString);
alphabits(testString);
palindrome(testString);

var inputField = document.getElementById('input');
var outputField = document.getElementById('output');
var button = document.getElementById('button');

inputField.addEventListener("keyup", function() {
	if (!/^[a-zA-Z]*$/g.test(inputField.value)) {
        alert("Invalid characters");
        inputField.focus();
        return false;
    }
});

button.addEventListener('click', function() {
	outputField.innerHTML = `<p>String Reversed: ` + reversal(inputField.value) + `</p>`;
	outputField.innerHTML += `<p>String Sorted: ` + alphabits(inputField.value) + `</p>`;
	if (palindrome(inputField.value)) {
		outputField.innerHTML += `<p>String is a Palindrome!`;
	} else {
		outputField.innerHTML += `<p>String is not a Palindrome!`;
	}
});