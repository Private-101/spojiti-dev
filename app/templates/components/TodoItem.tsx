import React, { type FC, forwardRef, useRef, useState, useEffect, useCallback } from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

import { useTodo } from "../context/todo.context";

type ChildProps = {
  item: {
    id: number;
    text: string;
    checked: boolean;
  };
};

const TodoItem = forwardRef<HTMLDivElement, ChildProps>(function InnerTodoItem(props, ref) {
    const { item } = props;
    const { deleteTask, editTask, setSelectedId, selectedId, localCheck, tasks } =
    useTodo();

  const checktext = useRef<HTMLParagraphElement>(null);
  const checkbox = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    editTask(item);
    setSelectedId(item.id);
  };

  const handleCheck = () => {
    checktext.current?.classList.toggle("check", checkbox.current?.checked);
  };

  const localChecked = useCallback(() => {
    if (item.checked) {
      checkbox.current?.setAttribute("checked", "checked");
      checktext.current?.classList.add("check");
    }
  }, [item.checked]);

  const taskCardClass =
    selectedId == item.id ? "task-card selected" : "task-card";

  useEffect(() => {
    localChecked();
  }, [localChecked]);

  return (
    <div className={taskCardClass} ref={ref}>
      <input
        type="checkbox"
        className="checkbox"
        ref={checkbox}
        onClick={() => {
          localCheck(item.id);
          handleCheck();
        }}
      />
      <p className="task-text" ref={checktext}>
        {item.text}
      </p>
      <div className="card-btn">
        <FaTrash className="delete" onClick={() => deleteTask(item.id)} />
        <FaEdit className="edit" onClick={handleEditClick} />
      </div>
    </div>
  );
});

export default TodoItem;