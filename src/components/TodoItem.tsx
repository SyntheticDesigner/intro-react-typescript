import React from "react";

const TodoItem: React.FC<{
  id: string;
  text: string;
  removeHandler: (id: string) => void;
}> = ({ id, text, removeHandler }) => {
  const clickHandler = (event: React.MouseEvent) => {
    removeHandler(id);
  };
  return (
    <li key={id} onClick={clickHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
