import React, { useEffect, useState, useReducer } from 'react'
import { Transition } from '@headlessui/react';
import { NavLink, useSearchParams } from '@remix-run/react';
import { Toast } from '~/components/common/Toast';
import { DropdownButton, DropdownButtonItem } from '~/components/playground/DropdownButton';
import { classNames } from '~/utils';
import TabsDemoPage from '~/experimental/pages/tabs.demo';
type PaginationAction = (index: number) => void;

interface ITaskProps {
    id: number;
    text: string;
    done: boolean;
};

type ITaskState = ITaskProps[];
// type Dispatch = (action: Action) => void;
// type Action = AddAction | ChangeAction | DeleteAction;

type AddAction = {type: 'added'; payload: ITaskProps}
type ChangeAction = {type: 'changed'; payload: ITaskProps}
type DeleteAction = {type: 'deleted'; payload: number}

export default function TasksRoute() {
    const [searchParams, setSearchParams] = useSearchParams();

    let nextId = 3;
    const initialTasks: ITaskState = [
      { id: 0, text: 'Visit Kafka Museum', done: true },
      { id: 1, text: 'Watch a puppet show', done: false },
      { id: 2, text: 'Lennon Wall pic', done: false }
    ];

    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    
      function handleAddTask(text: string) { 
        dispatch({ type: 'added', payload: { id: nextId++, text, done: false } });
      }
    
      function handleChangeTask(task: ITaskProps) {
        dispatch({ type: 'changed', payload: task });
      }
    
      function handleDeleteTask(taskId: number) {
        dispatch({ type: 'deleted', payload: taskId });
      }




    return (
        <>
        <section className="m-[20px] p-0">
        <h1 className="mt-0 text-xl">Prague itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
        </section>
        </>
    )
};






function tasksReducer(tasks: ITaskState, action: AddAction | ChangeAction | DeleteAction) {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.payload.id,
          text: action.payload.text,
          done: action.payload.done
        }];
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action.payload.id) {
            return action.payload;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== action.payload);
      }
      default: {
        return tasks
        // throw Error('Unknown action: ' + Date.now().toString());
      }
    }
  };

  interface ITaskItemProps {
    task: ITaskProps,
    onChange: (task: ITaskProps) => void,
    onDelete: (taskId: number) => void
  }
  function Task({ task, onChange, onDelete }: ITaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={e => {
              onChange({
                ...task,
                text: e.target.value
              });
            }} />
          <button className="m-1" onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button className="m-1" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
        {taskContent}
        <button className="m-1" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </label>
    );
  }

  interface IAddTaskProps {
    onAddTask: (task: string) => void
  };

  export function AddTask({ onAddTask }: IAddTaskProps) {
    const [text, setText] = useState('');
    return (
      <>
        <input
          placeholder="Add task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="m-1" onClick={() => {
          setText('');
          onAddTask(text);
        }}>Add</button>
      </>
    )
  };

  interface ITaskListProps {
    tasks: ITaskProps[],
    onChangeTask: (task: ITaskProps) => void,
    onDeleteTask: (taskId: number) => void
  }
  export function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
  }: ITaskListProps) {
    return (
      <ul className="m-0 p-0 pl-5">
        {tasks.map(task => (
          <li className="m-0 p-0 list-none" key={task.id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    );
  };






