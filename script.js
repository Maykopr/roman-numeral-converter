const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convertToRoman(str) {
	const romanChar = [
		["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
		["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"],
		["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"],
		["", "M", "MM", "MMM"],
	];
	let romanStr = [];
	for (let i = 0, end = str.length - 1; i <= end; i++) {
		romanStr.unshift(romanChar[i][str[end - i]]);
	}
	return romanStr.join("");
}

function inputHandler() {
	const input = inputNumber.value;
	const regex = /^\d+$/;
	const isValidInput = regex.test(input);

	if (!isValidInput) {
		output.innerText = "Please enter a valid number";
	} else if (parseInt(input) > 3999) {
		output.innerText = "Please enter a number less than or equal to 3999";
	} else if (parseInt(input) < 1) {
		output.innerText = "Please enter a number greater than or equal to 1";
	} else {
		output.innerText = convertToRoman(input);
	}
}

convertBtn.onclick = inputHandler;
inputNumber.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		inputHandler();
	}
});

/*todo:
- função atualiza a tela
*/
