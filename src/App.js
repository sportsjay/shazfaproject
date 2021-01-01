import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar.js";
import TodoList from "./Todolist.js";
// import todo from "./todo.js";

function App() {
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
