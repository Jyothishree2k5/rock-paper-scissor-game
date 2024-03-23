const toDoList=[{
    name :'make dinner',
    dueDate :'12-02-2023'},{
        
    name :'wash dishes',
    dueDate:'13-02-2023'}];
renderToDoList();
function renderToDoList(){
    let todoListHTML='';
        for(let i =0; i<toDoList.length;i++){
            const toDoObject=toDoList[i];
            const {name,dueDate} = toDoObject;//destruction property
            const html=`
            
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            toDoList.splice(${i},1);
            renderToDoList();
            " class="delete-todo-button">Delete
            </button>
            
            `;
            todoListHTML+= html;
            }
        document.querySelector('.js-todo-list').innerHTML=todoListHTML;
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