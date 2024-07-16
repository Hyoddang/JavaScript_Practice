document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-input-form");
  // const addTodo = document.querySelector(".submit-todo"); 이 변수는 사용되지 않음.
  const todoValue = document.querySelector(".todo-value");
  const todoWrap = document.querySelector(".todoList-wrap");

  let todos = [];

  //! Todo를 localStorage에 저장
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  //! Todo 추가 함수
  function addTodo(newTodo) {
    // const todoWrap = document.querySelector(".todoList-wrap") 함수 내부에서만 사용 가능 했음
    todoWrap.innerHTML += `<li class="todo" id="${newTodo.id}">
      <input type="checkbox" class="todo-check" ${newTodo.checked ? "checked" : ""}>
      <span class="todo-content ${newTodo.checked ? "todo-hidden" : ""}">${newTodo.text}</span>
      <button class="todo-modify"><i class="fa-solid fa-pen"></i></button>
      <button class="todo-remove"><i class="fa-regular fa-circle-xmark"></i></button>
    </li>`;
  }

  // Check시 텍스트에 이벤트 추가
  function todoCheckEffect(e) {
    if (e.target.classList.contains("todo-check")) {
      const todoItem = e.target.closest("li");
      if (todoItem) {
        const todoContent = todoItem.querySelector(".todo-content");
        const todoId = parseInt(todoItem.id);
        // 클릭된 체크박스와 관련된 Todo 객체 찾기
        const todo = todos.find(todo => todo.id === todoId);

        if (todo) {
          //? Todo객체의 체크 상태를 업데이트하고, 텍스트의 클래스 토글
          todo.checked = e.target.checked;
          todoContent.classList.toggle("todo-hidden", todo.checked);
          saveTodos();
        }
      }
    }
  }

  //! 동적으로 생성된 요소에 직접 이벤트 리스너를 추가하려 했기 때문에 오류가 발생
  //   deleteTodo.addEventListener("click", function removeTodoBtnHandler(e) {
  //   const removeTodo = e.target.parentElement;
  //   removeTodo.remove()
  // })

  //! Todo 삭제 버튼 함수
  function removeTodoBtnHandler(e) {
    //? 이벤트 위임을 사용하여 동적으로 생성된 삭제 버튼에 클릭 이벤트를 처리
    if (e.target.classList.contains("fa-circle-xmark")) {
      //? 클릭된 요소가 삭제 버튼인지 확인
      const removeTodo = e.target.closest("li"); // 가장 가까운 li 요소를 찾음
      if (removeTodo) {
        todos = todos.filter(todo => todo.id !== parseInt(removeTodo.id))
        console.log(todos[removeTodo])
        removeTodo.remove();
      }
      saveTodos()
    }
  }

  //! Todo 수정 버튼 함수
  function modifyTodoBtnHandler(e) {
    if(e.target.classList.contains("fa-pen")) {
      const modifyTodo = e.target.closest("li");
      
    }
  }

  function todoBtnHandler(e) {
    e.preventDefault();
    const newTodo = todoValue.value;
    todoValue.value = "";
    const newTodosObj = {
      text: newTodo,
      id: Date.now(),
      checked: false,
    };
    todos.push(newTodosObj); // 배열에 새로운 Todo 추가
    addTodo(newTodosObj); // 화면에 표시
    saveTodos();
  }

  todoForm.addEventListener("submit", todoBtnHandler);
  todoWrap.addEventListener("click", removeTodoBtnHandler);
  todoWrap.addEventListener("click", todoCheckEffect)
  todoWrap.addEventListener("click", modifyTodoBtnHandler);


  //! localStorage에 저장된 Todo를 불러오는 코드
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos;
    parsedTodos.forEach(addTodo)
  }
});
