import { listOfUsers } from "./users.js";

console.table(listOfUsers);


// создание элементов
const
	$app = document.getElementById("app");
	$addNewUser__form = document.getElementById("add-new-user-form");

const
	$table = document.createElement("table"),
	$tableHead = document.createElement("thead"),
	$tableBody = document.createElement("tbody");

const
	$tableHeadTr = document.createElement("tr"),

	$tableHeadTh__first_middle_last_names = document.createElement("th"),
	$tableHeadTh__age = document.createElement("th"),
	$tableHeadTh__year_of_birth = document.createElement("th"),
	$tableHeadTh__hobby = document.createElement("th");

$table.classList.add("table", "table-striped-columns");

$tableHeadTh__first_middle_last_names.textContent = "ФИО";
$tableHeadTh__age.textContent = "Возраст"
$tableHeadTh__year_of_birth.textContent = "Год рождения";
$tableHeadTh__hobby.textContent = "Хобби";


$tableHeadTr.append($tableHeadTh__first_middle_last_names);
$tableHeadTr.append($tableHeadTh__age);
$tableHeadTr.append($tableHeadTh__year_of_birth);
$tableHeadTr.append($tableHeadTh__hobby);

$tableHead.append($tableHeadTr);

$table.append($tableHead);
$table.append($tableBody);
$app.append($table);

// рендер

// 1. подготовка

// 2. отрисовка

let listOfUsers__copy = [...listOfUsers];																			// → создаю копию массива данных

for (let user of listOfUsers__copy) {
	const
		$userTr = document.createElement("tr"),

		$userTh__first_middle_last_names = document.createElement("th"),
		$userTh__age = document.createElement("th"),
		$userTh__year_of_birth = document.createElement("th"),
		$userTh__hobby = document.createElement("th");

	$userTh__first_middle_last_names.textContent = `${user.firstName} ` + `${user.middleName} ` + `${user.lastName} `;
	$userTh__age.textContent = `${user.age}`;
	$userTh__year_of_birth.textContent = `${new Date().getFullYear() - user.age}`;
	$userTh__hobby.textContent = `${user.hobby}`;

	$userTr.append($userTh__first_middle_last_names);
	$userTr.append($userTh__age);
	$userTr.append($userTh__year_of_birth);
	$userTr.append($userTh__hobby);

	$tableBody.append($userTr);
}


