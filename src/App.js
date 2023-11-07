import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const id = uuidv4();
  const initialState = [
    {
      id,
      title: "test1",
      contents: "todo contents",
      isDone: false,
    },
  ];
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState(initialState);
  const submitTodo = (e) => {
    e.preventDefault();
    const todoObj = { id, title, contents, isDone: false };
    setTodos([...todos, todoObj]);
    setTitle("");
    setContents("");
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const isDoneTodo = (id) => {
    const todoObj = (todos.find((todo) => todo.id === id).isDone = true);
    setTodos([...todos, todoObj]);
  };
  const isNotDoneTodo = (id) => {
    const todoObj = (todos.find((todo) => todo.id === id).isDone = false);
    setTodos([...todos, todoObj]);
  };
  return (
    <div>
      <header>ToDoList</header>
      <main>
        <form onSubmit={submitTodo}>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Write your todo title"
            required
          ></input>
          <input
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
            type="text"
            placeholder="Write your todo content"
            required
          ></input>
          <button>추가</button>
        </form>
        <h1>Working..!🔥</h1>
        <ul className="todo-list">
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <li key={todo.id} className="todo">
                  <h2>{todo.title}</h2>
                  <p>{todo.contents}</p>
                  <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                  <button onClick={() => isDoneTodo(todo.id)}>완료</button>
                </li>
              );
            })}
        </ul>
        <h1>Done..!🎉</h1>
        <ul className="todo-list">
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <li key={todo.id} className="todo">
                  <h2>{todo.title}</h2>
                  <p>{todo.contents}</p>
                  <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                  <button onClick={() => isNotDoneTodo(todo.id)}>취소</button>
                </li>
              );
            })}
        </ul>
      </main>
      <footer> Hyewon's To Do List &copy; All right reserved</footer>
    </div>
  );
}

export default App;
