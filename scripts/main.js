// TODO разделить код на модули
// TODO улучшить функциональность фильтрации
// TODO улучшить функциональность сортировки
// TODO улучшить функциональность отображения скиска


import { listOfUsers } from "./users.js";

console.table(listOfUsers);

// retrieving elements
const
	$app = document.getElementById("app"),
	$addNewUser__form = document.getElementById("add-new-user-form");

const
	$sortButton__by_full_name_length__ascendence = document.getElementById("sort-by-full-name-length-ascendence-button"),
	$sortButton__by_full_name_length__descendence = document.getElementById("sort-by-full-name-length-descendence-button"),
	$sortButton__by_age__ascendence = document.getElementById("sort-by-age-ascendence-button"),
	$sortButton__by_age__descendence = document.getElementById("sort-by-age-descendence-button");

const
	$filterForm = document.getElementById("filter-list-of-users-form");

const
	$filterForm__filter_by_hobby__input = document.getElementById("hobby-input-filter-list-of-users-form"),
	$filterForm__filter_by_age__input = document.getElementById("age-input-filter-list-of-users-form"),
	$filterForm__filter_by_first_name__input = document.getElementById("first-name-input-filter-list-of-users-form"),
	$filterForm__filter_by_full_name__input = document.getElementById("full-name-input-filter-list-of-users-form");

// elements creation
const
	$table = document.createElement("table"),
	$tableHead = document.createElement("thead"),
	$tableBody = document.createElement("tbody");

const
	$firstName__input = document.getElementById("first-name-input-add-new-user-form"),
	$middleName__input = document.getElementById("middle-name-input-add-new-user-form"),
	$lastName__input = document.getElementById("last-name-input-add-new-user-form"),
	$age__input = document.getElementById("age-input-add-new-user-form"),
	$hobby__input = document.getElementById("hobby-input-add-new-user-form");

const
	$tableHeadTr = document.createElement("tr"),

	$tableHeadTh__first_middle_last_names = document.createElement("th"),
	$tableHeadTh__age = document.createElement("th"),
	$tableHeadTh__year_of_birth = document.createElement("th"),
	$tableHeadTh__hobby = document.createElement("th");

$table.classList.add("table", "table-striped-columns");

$tableHeadTh__first_middle_last_names.textContent = "ФАМИЛИЯ ИМЯ ОТЧЕСТВО";
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

function createUser__table_row(user) {
	const
		$userTr = document.createElement("tr"),
		$userTh__first_middle_last_names = document.createElement("th"),
		$userTh__age = document.createElement("th"),
		$userTh__year_of_birth = document.createElement("th"),
		$userTh__hobby = document.createElement("th");

	$userTh__first_middle_last_names.textContent = `${user.fullName}`;
	$userTh__age.textContent = `${user.age}`;
	$userTh__year_of_birth.textContent = `${user.yearOfBirth}`;
	$userTh__hobby.textContent = `${user.hobby}`;

	$userTr.append($userTh__first_middle_last_names);
	$userTr.append($userTh__age);
	$userTr.append($userTh__year_of_birth);
	$userTr.append($userTh__hobby);

	return $userTr;
}

function createUser() {
	return {
		firstName: $firstName__input.value.trim(),
		middleName: $middleName__input.value.trim(),
		lastName: $lastName__input.value.trim(),
		age: parseInt($age__input.value.trim()),
		hobby: $hobby__input.value.trim()
	};
}

function renderListOfUsers(listToRender) {
	$tableBody.innerHTML = '';

	const listOfUsers__copy = [...listToRender];
	for (const user of listOfUsers__copy) {
		user.fullName = `${user.lastName} ` + `${user.firstName} ` + `${user.middleName} `.trim();
		user.yearOfBirth = `${new Date().getFullYear() - user.age}`;
	}

	for (const user of listOfUsers__copy) {
		const $user__table_row_holder = createUser__table_row(user);
		$tableBody.append($user__table_row_holder);
	}
};

// adding new user
renderListOfUsers(listOfUsers);

$addNewUser__form.addEventListener("submit", event => {
	event.preventDefault();

	// simple validation
	if ($firstName__input.value.trim() === "") {
		alert("First Name is required.");
		return;
	}
	if ($lastName__input.value.trim() === "") {
		alert("Last Name is required.");
		return;
	}
	if ($age__input.value.trim() === "") {
		alert("Age is required.");
		return;
	}

	if ($hobby__input.value.trim() === "" ||
		$hobby__input.value.trim() === null ||
		$hobby__input.value.trim() === undefined) {

		$hobby__input.value = "Пока не знаю";
	}

	listOfUsers.push(createUser());

	renderListOfUsers(listOfUsers);

	$addNewUser__form.reset();

});

// sorting events

// ascendence way
$sortButton__by_full_name_length__ascendence.addEventListener('click', event => {
	listOfUsers.sort((user_1, user_2) => user_1.fullName.length - user_2.fullName.length);
	renderListOfUsers(listOfUsers);
});

$sortButton__by_age__ascendence.addEventListener(`click`, event => {
	listOfUsers.sort((user_1, user_2) => user_1.age - user_2.age);
	renderListOfUsers(listOfUsers);
});

// descendence way
$sortButton__by_full_name_length__descendence.addEventListener('click', event => {
	listOfUsers.sort((user_1, user_2) => user_2.fullName.length - user_1.fullName.length);
	renderListOfUsers(listOfUsers);
});

$sortButton__by_age__descendence.addEventListener(`click`, event => {
	listOfUsers.sort((user_1, user_2) => user_2.age - user_1.age);
	renderListOfUsers(listOfUsers);
});


// filter events

$filterForm.addEventListener('submit', event => {
	event.preventDefault();
});

// if focus
$filterForm__filter_by_hobby__input.addEventListener('input', event => {
	const filteredListOfUsers = listOfUsers.filter(user => user.hobby.toLowerCase().includes($filterForm__filter_by_hobby__input.value.trim()));
	renderListOfUsers(filteredListOfUsers);
});

$filterForm__filter_by_age__input.addEventListener('input', event => {
	const filteredListOfUsers = listOfUsers.filter(user => user.age === parseInt($filterForm__filter_by_age__input.value));
	renderListOfUsers(filteredListOfUsers);
});

$filterForm__filter_by_first_name__input.addEventListener(`input`, event => {
	const filteredListOfUsers = listOfUsers.filter(user => user.firstName.toLowerCase().includes($filterForm__filter_by_first_name__input.value.trim()));
	renderListOfUsers(filteredListOfUsers);
});

$filterForm__filter_by_full_name__input.addEventListener(`input`, event => {
	const filteredListOfUsers = listOfUsers.filter(user => user.fullName.toLowerCase().includes($filterForm__filter_by_full_name__input.value.trim()));
	renderListOfUsers(filteredListOfUsers);
});

// if blur
$filterForm__filter_by_hobby__input.addEventListener('blur', event => {
	renderListOfUsers(listOfUsers);
	event.target.value = '';
});

$filterForm__filter_by_age__input.addEventListener('blur', event => {
	renderListOfUsers(listOfUsers);
	event.target.value = '';
});

$filterForm__filter_by_first_name__input.addEventListener('blur', event => {
	renderListOfUsers(listOfUsers);
	event.target.value = '';
});

$filterForm__filter_by_full_name__input.addEventListener(`blur`, event => {
	renderListOfUsers(listOfUsers);
	event.target.value = '';
})
