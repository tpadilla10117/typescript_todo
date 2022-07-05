/* Non-Null assertion operator: ! */
/* 
    - one way to assert that such an element exists
*/

/* We have to assert / tell typescript that our HTMLElement has a value: */
const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;

const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(newTodoText);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = '';
});

/*  You have to specify the context for a plain event handler:

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        console.log('Submitted');
    }
*/


/* btn.addEventListener('click', function () {
    input.value;
}); */