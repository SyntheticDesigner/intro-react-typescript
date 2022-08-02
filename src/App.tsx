import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
function App() {
  //useState is a generic function which allows us to
  //use our type generic to extend what types there will be

  // new Todo("Learn React"),
  // new Todo("Learn Typescript"),

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
