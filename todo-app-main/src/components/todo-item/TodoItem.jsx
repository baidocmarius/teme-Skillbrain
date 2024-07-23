import React from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";
import { useState } from "react";
import { useEffect } from "react";

const TodoItem = (props) => {
  const [checked, setChecked] = useState(props.todo.completed);

  useEffect(() => {
    setChecked(props.todo.completed);
  }, [props.todo.completed]);

  const handleCheckboxChange = () => {
    const newCheckedStatus = !checked;
    setChecked(newCheckedStatus);

    if (newCheckedStatus) {
      setTimeout(() => {
        props.onMoveToCompleted(props.todo.id);
      }, 500);
    } else {
      props.onMoveToToDo(props.todo.id);
    }
  };

  const handleDelete = () => {
    props.onDelete(props.todo.id);
  };

  const handleEdit = () => {
    props.onEdit();
  };

  return (
    <div
      className={`todo-item ${props.todo.completed ? "todo-completed" : ""}`}
    >
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            greenCheck
          />
          <h4>{props.todo.title}</h4>
        </div>
        <div>
          <i
            className="fa fa-pencil"
            aria-hidden="true"
            onClick={handleEdit}
          ></i>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <div className="separator"></div>
      <p>{props.todo.description}</p>
    </div>
  );
};

export default TodoItem;
