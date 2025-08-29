const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList()

function renderTodoList() {
  let todohtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class='deletebutton' onclick='
    todoList.splice(${i}, 1);
    renderTodoList();
    '
    >delete</button>`;
    todohtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todohtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    name,
    dueDate,
  });
  renderTodoList();
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
