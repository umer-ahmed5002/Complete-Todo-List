

let todoList = [];
let newArray = [];
let secondArray = [];

let compBox = document.querySelector('#completeContainer')

let new2Html = '';

let cansleBox = document.querySelector('#cansleContainer')

let new3Html = '';
let todoElement = document.querySelector('#todoTask')

let slecte = null;

task();

completeTask()

function addTodo(){

    let todoValue = todoElement.value;
    if (slecte || slecte === 0) {
        console.log(todoList[slecte]);
        console.log(todoElement.value );

        todoList[slecte] = todoElement.value 
        todoElement.value = '';
    
        task();
    }else{

        todoList.push(todoValue);
    
        todoElement.value = '';
    
        task();
        completeTask()
    }
}

function task(){

    let taskElement = document.querySelector('#taskContainer')

    let taskHtml = ''

    for(let i = 0; i < todoList.length; i++){

        taskHtml += 
        
        `
        <div class="flex">
        <span>${todoList[i]}</span>

        
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          :
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            <div class="drop">        

          <button onclick="todoList.splice(${i}, 1); task()"> Delete</button>

          <button onclick="completeTask(${i});">Complete</button>
          
          <button onclick="cansleTask(${i});">Cancle</button>

          <button onclick="editTask(${i});">Edit</button>
          </div>
        </div>
      
      </div>

        `
    }

    taskElement.innerHTML = taskHtml;

}

function completeTask(i){

   if (i || i === 0) {
    
    
    newArray.push(todoList[i])

    todoList.splice([i], 1)  
    
    task();

    for(let a = 0; a < newArray.length; a++){

        new2Html += `
        
        <span>${newArray[a]}</span>
         `
        }
    compBox.innerHTML = new2Html;
}

}

function cansleTask(i){

if(i || i === 0){
    secondArray.push(todoList[i])

    todoList.splice([i], 1)

    task();

    for(let x = 0; x < secondArray.length; x++){

        new3Html +=
        `
        <span>${secondArray[x]}</span>
        `
 }

cansleBox.innerHTML = new3Html;

}

}

function editTask(i){

    if (i || i === 0) {
        
        todoElement.value = todoList[i]

        slecte = i


    }

    
}