const todolist = ["list"];

rendertodolist();

function addTodo() {
  let inputElement = document.querySelector(".js-name-todo");
  todolist.push(inputElement.value);
  console.log(todolist);
  rendertodolist()
}

function rendertodolist() {
  todolisthtml = "";
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p>${todo}</p><button>delete</button>`;
    todolisthtml += html;
  }
  document.querySelector(".js-listTodo").innerHTML = todolisthtml;
}

function deleteItem(){

}
