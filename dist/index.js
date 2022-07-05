"use strict";
/* Non-Null assertion operator: ! */
/*
    - one way to assert that such an element exists
*/
/* We have to assert / tell typescript that our HTMLElement has a value: */
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null) {
        return [];
    }
    return JSON.parse(todosJSON);
}
;
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
;
;
const todos = readTodos();
todos.forEach(createTodo);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = '';
});
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
;
/*  You have to specify the context for a plain event handler:

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        console.log('Submitted');
    }
*/
/* btn.addEventListener('click', function () {
    input.value;
}); */ 
