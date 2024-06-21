let todoArr = []

let todoValue = document.querySelector(".todo-input");

let todoIndex = document.querySelectorAll(".content");
todoIndex.forEach(index => {
  let todoDataIndex = index.dataset.index;
})

let todoAddBtn = document.querySelector(".fa-plus").addEventListener('click',function addTodo() {
  if (todoValue.value) {
    todoArr.push(todoValue.value);
    renderTodo()
    todoValue.value = '';
  }
})

function renderTodo() {
  let contentDiv = document.querySelector('.todo-list');
  // 기존 내용을 지워 중복추가를 방지하는 속성
  contentDiv.innerHTML = '';

  if(!todoValue.value) {
    return;
  }

  todoArr.forEach((todo, index) => {
    contentDiv.innerHTML += 
    `<li class="content" data-index="${index}">
    <p>${todo}</p>
    <div class="content-footer">
      <button><i class="fa-solid fa-pencil"></i></button>
      <button><i class="fa-solid fa-xmark"></i></button>
    </div>
  </li>`
  })

  deleteTodo();
}

let deleteBtn = document.querySelector(".fa-xmark");
deleteBtn.addEventListener("click", function deleteTodo() {
  let todoArr = todoArr.filter((i) => i !== i);

  renderTodo();
});

