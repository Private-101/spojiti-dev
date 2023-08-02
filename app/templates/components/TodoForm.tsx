import React, { type ChangeEvent, type FC, type FormEvent, forwardRef, useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";

import { useTodo } from "../context/todo.context";

const TodoForm = forwardRef<HTMLFormElement, {}>(function InnerTodoForm(_, ref) {
        const { addTask, edit, updateTask } = useTodo();
      
        const [text, setText] = useState<string>("");
        const [id, setId] = useState<number>();
      
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        };
      
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (edit.edit) {
            updateTask({ text, id: edit.item.id });
            edit.edit = false;
          } else {
            const generateId = Math.floor(Math.random() * 10000000000000);
            addTask({ text, id: generateId, checked: false });
          }
          setText("");
        };
      
        useEffect(() => {
          if (edit.edit) {
            setText(edit.item.text);
            setId(edit.item.id);
          }
        }, [edit]);
      
        return (
          <form className="task-form" onSubmit={handleSubmit} ref={ref}>
            <input
              type="text"
              placeholder="Enter task !"
              value={text}
              className="form"
              onChange={handleChange}
            />
            <button>
              <FaPlus className="add" />
            </button>
          </form>
        );
      }
);

export default TodoForm;