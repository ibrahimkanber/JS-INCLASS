const todoList=[];
const todoListEl=document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click",addTodo);

function addTodo(){
    const todoText=document.querySelector("#myInput").value;
    console.log(todoText);

    const todoObject={
        id:counter,
        todoText:todoText,
        isDone:false
    };

    todoList.push(todoObject);

}

function doneTode(todoId){
    const selectedTodoId=todoList.findIndex(todo=>todo.id==todoId);

    todoList[selectedTodoId]


}




// [
//     {   id:0,
//         todoText:"Eve gideceğim",
//         isDone:false
//     },
//     {
//         id:1,
//         todoText:"Çöpler toparlanacak",
//         isDone:
//     },
//     {
//         id:2,
//         todoText:"Köpeği gezdirecek",

//     }

// ]
