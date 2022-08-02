import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  //React.FC is a generic type definition for react
  //function components allows us to specify the
  //type of all the default prop option a component
  //gets, adding the <{}> to the FC generic type
  //allows us to merge our own type definition with
  //the one predefined by React
  //BTW you can make a prop optional by adding a '?'
  //after it I.E. <{item?: string[]}>

  const todoCtx = useContext(TodosContext);
  return (
    <div>
      <ul>
        {todoCtx.items.map((item) => (
          <TodoItem
            id={item.id}
            text={item.text}
            removeHandler={todoCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
