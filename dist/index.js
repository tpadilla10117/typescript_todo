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



/* JS CLASSES Practice: */

class Player {
    //class fields: on every instance, these properties should be set:
    //only works for values tha are hardcoded
    //Private Fields: uses a #, and indicates a property should only be used in the class

    // 'static' keyword: tells a property that it exists on the class itself and not an individual instance
    //  - can also use static on methods, so it only exists on the class and not the instances

    #score = 0;
    numLives = 10;
    static description = 'Player in our game';
    constructor(first, last) {
        //can execute functionaility when creating a new instance
        this.first = first;
        this.last = last;
    }
    getScore() {
        return this.#score;
    }
    //Getters: call as if it were a property, then run logic like a method:
    // - uses the 'get' keyword
    get fullName() {
        return `${this.first} ${this.last}`;
    }

    //Setters: object accessor to set a property
    set score(newScore) {
        if(newScore < 0) {
            throw new Error('Score must be non-negative');
        };
        this.#score = newScore;
    }
};

/* Extends: saves time and allows you to extend properties, method from one class to another: */
class AdminPlayer extends Player {
    //super constructor: references the derived constructor, but allows you to pass new values:
    constructor(first, last, privileges) {
        super(first,last); //calls derived constructor
        this.privileges = privileges;
    }

    isAdmin = true;
};

const admin = new AdminPlayer('Tom', 'Jones', ['Shoot lasers']);

const player1 = new Player('Blue', 'Bomber');
console.log(player1);
player1.score = 322;
console.log(player1.getScore())
console.log(player1.fullName)


const player2 = new Player('Red', 'Bomber');
console.log(player2);
