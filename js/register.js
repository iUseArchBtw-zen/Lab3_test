



const phoneInput = document.getElementById('phone');
const maskOptions = { mask: '+{38}(000) 000-00-00' };
const mask = IMask(phoneInput, maskOptions);


const form = document.getElementById('registerForm');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let valid = true;

	emailError.textContent = '';
	passError.textContent = '';
	phoneError.textContent = '';

	if (!form.Email.value.includes('@')) {
		emailError.textContent = 'Некоректний email.';
		valid = false;
	}

	if (form.Пароль.value.length < 6) {
		passError.textContent = 'Пароль має містити щонайменше 6 символів.';
		valid = false;
	}

	if (phoneInput.value.length < 17) {
		phoneError.textContent = 'Будь ласка, введіть повний номер телефону.';
		valid = false;
	}

	if (/\d/.test(form.Прізвище.value)) {
		console.log("Фамилия содержит цифры!");
		valid = false;
	}

	if (/\d/.test(form["Ім’я"].value)) {
		console.log("Имя содержит цифры!");
		valid = false;
	}

	if (form["По батькові"].value && /\d/.test(form["По батькові"].value)) {
		console.log("По батькові содержит цифры!");
		valid = false;
	}


	if (valid) {
		getRegData();
		form.reset();
		mask.updateValue();
	}
});

phoneInput.addEventListener('input', () => phoneError.textContent = '');
form.Email.addEventListener('input', () => emailError.textContent = '');
form.Пароль.addEventListener('input', () => passError.textContent = '');


function tableBulder(table, key, value) {
	const row = document.createElement("tr");
	const cellKey = document.createElement("th");
	const cellValue = document.createElement("td");
	const cellEdit = document.createElement("td");
	const checkBox = document.createElement("input");

	checkBox.setAttribute("type", "checkbox");
	checkBox.id = key;

	cellKey.textContent = key;
	cellValue.textContent = value;

	row.appendChild(cellKey);
	row.appendChild(cellValue);
	row.appendChild(cellEdit);
	cellEdit.appendChild(checkBox);
	table.appendChild(row);

}

function deleteSelectedCheckbox() {
	const table = document.querySelector("#dataTable table")
	let checkBoxStatus = table.querySelectorAll('input[type="checkbox"]:checked');

	for (const i of checkBoxStatus) {
		i.closest("tr").remove();
	}

}

function rowDublicate() {
	const table = document.querySelector("#dataTable table")
	let checkBoxStatus = table.querySelectorAll('input[type="checkbox"]:checked');

	for (const i of checkBoxStatus) {
		const row = i.closest("tr");
		const clone = row.cloneNode(true);
		row.after(clone);
	}
}

function getRegData() {
	let form = document.forms["user_reg"];
	let data = new FormData(form);

	let table = document.createElement("table");
	table.classList.add("data_table")

	for (const [key, value] of data) {
		tableBulder(table, key, value);
	}

	let dataTable = document.getElementById("dataTable");
	dataTable.innerHTML = "";
	dataTable.appendChild(table);

}