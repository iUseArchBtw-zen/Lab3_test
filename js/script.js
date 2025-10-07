
let length;
let width;

function calculateRectData(length, width) {
	if (!isNaN(length) && !isNaN(width) && length >= 0 && width >= 0) {
		let perimetr = 2 * (length + width);
		let square = length * width;
		let recDiagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

		document.getElementById("calculatorResult").innerHTML =
			`Perimetr: ${perimetr}</br>
		Square: ${square}</br>
		recDiagonal: ${recDiagonal}
		`;
	} else {
		document.getElementById("calculatorResult").innerHTML =
			`Perimetr: ERROR
		Square: ERROR
		recDiagonal: ERROR
		`;
	}
}

function displayDataForms() {
	length = Number(document.getElementById("length").value);
	width = Number(document.getElementById("width").value);

	calculateRectData(length, width);
}





/*---------------------*/

const ukrainianToLatin = {
	'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya',
	'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'YE', 'Ж': 'ZH', 'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'YI', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ь': '', 'Ю': 'YU', 'Я': 'YA'
}

function translitText() {
	let text = document.getElementById("ukrText").value;
	let result = " ";

	for (let i = 0; i < text.length; i++) {
		if (ukrainianToLatin[text[i]] !== undefined) {
			result += ukrainianToLatin[text[i]];
		} else result += text[i]
	}
	document.getElementById("latinText").innerHTML = result
}