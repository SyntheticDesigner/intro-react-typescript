import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
//this ```(text: string) => void``` is how you
//define a type of function that hasa a parameter that
//expects a string and returns nothing
const NewTodo: React.FC = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);
  //all dom elements have a default type
  //have to be explicit about the initial element
  const submitHandler = (event: React.FormEvent) => {
    //there are also click events hover events and all other events
    event.preventDefault();
    const enteredText = todoTextInput.current!.value;
    //a question mark after current will allow the inferred type to be its intended type or undefined
    //using a ! mark tells type script that you the developer knows it will never be undefined
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input ref={todoTextInput} type='text' name='text' id='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
