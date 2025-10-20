
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

function getCheckBoxStatus() {
	console.log(document.getElementById("2").checked)
}

function rowDelete() {
	if (document.getElementById("2").checked) {

		const row = document.getElementById("2").closest("tr");
		row.remove();
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



