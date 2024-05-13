let todoArr = []

let todoValue = document.querySelector(".todo-input");

let todoAddBtn = document.querySelector(".fa-plus").addEventListener('click',function addTodo() {
  let contentDiv = document.querySelector('.todo-list');

  todoArr.push(todoValue.value);

  contentDiv.innerHTML += 
  `<li class="content">
  <p>${todoValue.value}</p>
  <div class="content-footer">
    <button><i class="fa-solid fa-pencil"></i></button>
    <button><i class="fa-solid fa-xmark"></i></button>
  </div>
</li>`

})
