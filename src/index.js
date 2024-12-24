const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoLs = document.querySelector("#todoLs");
const editBtn = document.querySelector("ul li div button:first-child");

let todoList = [];

addBtn.addEventListener("click", (e) => {
	e.preventDefault();

	let todoInput2 = todoInput.value.trim();

	if (todoInput2 === "") {
		alert("Please Enter a Value");
		return;
	}

	const listOption = document.createElement("li");

	listOption.innerHTML = `<span>${todoInput.value}</span><div><button class="doneBtn"><svg class=size-6 fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="m4.5 12.75 6 6 9-13.5"stroke-linecap=round stroke-linejoin=round /></svg></button> <button class="editBtn"><svg class=size-6 fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"stroke-linecap=round stroke-linejoin=round /></svg></button> <button class="deleteBtn"><svg class=size-6 fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"stroke-linecap=round stroke-linejoin=round /></svg></button></div>`;
	todoInput.value = "";
	todoLs.appendChild(listOption);

	listOption
		.querySelector(".doneBtn")
		.addEventListener("click", () => doneTask(listOption));
});

function doneTask(item) {
	const textSpan = item.querySelector("span");
	textSpan.classList.toggle("line-through");
	textSpan.classList.toggle("text-gray-500");
}
