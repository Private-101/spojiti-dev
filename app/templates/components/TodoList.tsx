import React, { type FC, forwardRef } from "react";

// import { useAutoAnimate } from "@formkit/auto-animate/react";

import TodoItem from "./TodoItem";

import { useTheme } from "../context/theme.context";
import { useTodo } from "../context/todo.context";

const TodoList = forwardRef<HTMLDivElement, {}>(function InnerTodoList(_, ref) {
    const { filteredTasks } = useTodo();
    const { theme } = useTheme();
  
    // const [animationParent] = useAutoAnimate();
  
    if (!filteredTasks || filteredTasks.length === 0) {
      return <p className="no-task">No Task Added</p>;
    }
  
    return (
      <div className={`task-list ${theme}`} ref={ref}>
        {filteredTasks.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    );
  })

export default TodoList;