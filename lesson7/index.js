const todoList=[];
const todoListEl=document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click",addTodo);

function addTodo(){
    const todoText=document.querySelector("#myInput").value;
    console.log(todoText);

    const todoObject={
        id:todoList.length*2,
        todoText:todoText,
        isDone:false
    };

    todoList.push(todoObject);
    displayTodos()

}

function doneTode(todoId){
    const selectedTodoId=todoList.findIndex(todo=>todo.id==todoId);

    todoList[selectedTodoId].isDone=true;


}

function displayTodos(){
    todoList.forEach(todo=>{
        const todoElement=document.createElement("li");
        todoElement.dataset.id="deneme";
        if(item.isDone){
            todoElement.classList.add("checked")
        }
        todoElement.addEventListener()
        todoListEl.appendChild(todoElement)
    })
}




