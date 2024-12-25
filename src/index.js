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
	listOption
		.querySelector(".editBtn")
		.addEventListener("click", () => editTask(listOption));
	listOption
		.querySelector(".deleteBtn")
		.addEventListener("click", () => deleteTask(listOption));
});

function doneTask(items) {
	let textSpan = items.querySelector("#todoLs li span");
	let doneBtn = items.querySelector(".doneBtn");

	textSpan.classList.toggle("line-through");
	textSpan.classList.toggle("text-gray-500");

	if (textSpan.classList.contains("line-through")) {
		doneBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`;
	} else {
		doneBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
	}
}

function editTask(items) {
	let todoSpan = items.querySelector("#todoLs li span");
	let editBtn =
		items.querySelector(".saveBtn") || items.querySelector(".editBtn");

	if (editBtn.classList.contains("editBtn")) {
		const input = document.createElement("input");
		input.id = "editInput";
		input.type = "text";
		input.value = todoSpan.textContent;
		items.insertBefore(input, todoSpan);
		todoSpan.style.display = "none";
		editBtn.classList.remove("editBtn");
		editBtn.classList.add("saveBtn");
		editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16"><path d="M11 2H9v3h2z"/><path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>`;
	} else if (editBtn.classList.contains("saveBtn")) {
		const input = items.querySelector("#editInput");
		todoSpan.textContent = input.value;
		input.remove();
		todoSpan.style.display = "inline";

		editBtn.classList.remove("saveBtn");
		editBtn.classList.add("editBtn");
		editBtn.innerHTML = `<svg class=size-6 fill=none stroke=currentColor stroke-width=1.5 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"stroke-linecap=round stroke-linejoin=round /></svg>`;
	}
}

function deleteTask(items) {
	items.remove();
}
