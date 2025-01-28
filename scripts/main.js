// база данных
let listOfUsers = [
	{
		firstName: "Aibek",
		middleName: "Tashevich",
		lastName: "Voronin",
		age: 28,
		hobby: "Reading"
	},
	{
		firstName: "Ivan",
		middleName: "Sergeevich",
		lastName: "Ivanov",
		age: 34,
		hobby: "Gaming"
	},
	{
		firstName: "Maria",
		middleName: "Dmitrievna",
		lastName: "Petrova",
		age: 22,
		hobby: "Painting"
	},
	{
		firstName: "Alexey",
		middleName: "Viktorovich",
		lastName: "Sidorov",
		age: 40,
		hobby: "Fishing"
	},
	{
		firstName: "Olga",
		middleName: "Nikolaevna",
		lastName: "Smirnova",
		age: 29,
		hobby: "Dancing"
	},
	{
		firstName: "Dmitry",
		middleName: "Andreevich",
		lastName: "Kuznetsov",
		age: 31,
		hobby: "Cooking"
	},
	{
		firstName: "Elena",
		middleName: "Pavlovna",
		lastName: "Popova",
		age: 25,
		hobby: "Traveling"
	},
	{
		firstName: "Sergey",
		middleName: "Alexandrovich",
		lastName: "Volkov",
		age: 37,
		hobby: "Photography"
	},
	{
		firstName: "Tatiana",
		middleName: "Vladimirovna",
		lastName: "Kozlova",
		age: 26,
		hobby: "Yoga"
	},
	{
		firstName: "Pavel",
		middleName: "Olegovich",
		lastName: "Lebedev",
		age: 33,
		hobby: "Cycling"
	}
];

console.table(listOfUsers);


// создание элементов
const
	$app = document.getElementById("app");

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

// TODO изменить логику → нужно отрисовывать только часть пользователей и только по запросу отрисовывать оставшихся (по возможности)
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
