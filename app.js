document.getElementById("addBtn").addEventListener("click", function () {
  const todoContainer = document.getElementById("todoList");
  const inputField = document.getElementById("inputField");

  const list = document.createElement("li");
  const todoName = inputField.value;

  list.innerText = todoName;
  todoContainer.appendChild(list);

  inputField.value = "";
});
