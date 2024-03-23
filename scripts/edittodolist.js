const toDoList=[{
    name :'make dinner',
    dueDate :'12-02-2023'},{
        
    name :'wash dishes',
    dueDate:'13-02-2023'}];
renderToDoList();
function renderToDoList(){
    let todoListHTML='';
    toDoList.forEach((toDoObject,index) =>
       {
            
            const {name,dueDate} = toDoObject;//destruction property
            const html=`
            
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">
            Delete
            </button>
            
            `;
            todoListHTML+= html;
            })
        document.querySelector('.js-todo-list').innerHTML=todoListHTML;


document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index) =>{
  deleteButton.addEventListener('click',() => {
    toDoList.splice(index,1);
    renderToDoList();

  });
});

document.querySelector('.js-add-todo-button').addEventListener('click',() =>{
  addToDo();

});
}


function addToDo(){
  const inputElement =document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement= document.querySelector('.js-dueDate-input');
  const dueDate=dateInputElement.value;
  toDoList.push({
    //shorthand property
    name,
    dueDate
  });
  inputElement.value='';

    renderToDoList();
}