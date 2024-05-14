let todoArr = []

let todoValue = document.querySelector(".todo-input");

let todoAddBtn = document.querySelector(".fa-plus").addEventListener('click',function addTodo() {
  renderTodo()
  todoValue.value = '';
})

function renderTodo() {
  let contentDiv = document.querySelector('.todo-list');

  if(!todoValue.value) {
    return;
  }

  todoArr.push(todoValue.value);

  contentDiv.innerHTML += 
  `<li class="content">
  <p>${todoValue.value}</p>
  <div class="content-footer">
    <button><i class="fa-solid fa-pencil"></i></button>
    <button><i class="fa-solid fa-xmark"></i></button>
  </div>
</li>`
}

let deleteBtn = document.querySelector('.fa-xmark').addEventListener("click", function deleteTodo() {
  todoArr.filter(todo => {
    
  })
})
