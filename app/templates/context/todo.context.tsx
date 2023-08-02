import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from "react";
  import useLocalStorage from "~/hooks/useLocalStorage";
  
  type TaskProps = {
    id: number;
    text: string;
    checked: boolean;
  };

  type EditContext = {
    item: TaskProps;
    edit: boolean;
  };

  interface IType {
    tasks: TaskProps[];
    selectedTasks: TaskProps[];
    addTask: (newTask: TaskProps) => void;
    deleteTask: (id: number) => void;
    editTask: (item: TaskProps) => void;
    edit: EditContext;
    updateTask: (newTask: Partial<TaskProps>) => void;
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
    selectedId: number | null;
    filteredTasks: TaskProps[];
    searchTask: (text: string) => void;
    localCheck: (id: number) => void;
  }
  const TodoContext = createContext<IType>({
    tasks: [],
    selectedTasks: [],
    addTask: () => {},
    deleteTask: () => {},
    editTask: () => {},
    edit: {
      item: {
        text: "",
        id: 0,
        checked: false,
      },
      edit: false,
    },
    updateTask: () => {},
    setSelectedId: () => {},
    selectedId: null,
    filteredTasks: [],
    searchTask: () => {},
    localCheck: () => {},
  });
  
  export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    // const [tasks, setTasks] = useState<TaskProps[]>(
      // JSON.parse(localStorage.getItem("tasks")!) ?? []
    // );
    const [tasks, setTasks] = useLocalStorage<TaskProps[]>('tasks', []);
    const [edit, setEdit] = useState<EditContext>({
      item: {
        text: "",
        id: 0,
        checked: false,
      },
      edit: false,
    });
  
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [filteredTasks, setFilteredTasks] = useState<TaskProps[]>(tasks);
    const [selectedTasks, setSelectedTasks] = useState<TaskProps[]>([]);
  
    //? SetFiltered Task
    const searchTask = useCallback((text: string) => {
        setFilteredTasks(tasks.filter((item) => item.text.includes(text)));
      },
      [tasks]
    );
    //* const searchTask = (text: string) => {
    //*  setFilteredTasks(current=>current.filter((item) => item.text.includes(text)));
    //* };
  
    //? Sets checked value in local
    const localCheck = (id: number) => {
      setTasks((current) =>
        current.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    };
  
    //? Get Task from Local Storage
    // const setLocalTask = useCallback(() => {
        // localStorage.setItem("tasks", JSON.stringify(tasks));
      // }, [tasks]);
  
    //? Add Task
    const addTask = (newTask: TaskProps) => {
      if (newTask.text !== "") {
        setTasks([newTask, ...tasks]);
      };

      // if (
        // newTask.text.toLowerCase().includes("order 66") ||
        // newTask.text.toLowerCase().includes("execute order 66")
      // ) {
        // window.open("https://www.youtube.com/watch?v=G2QhAynp1FY");
      // }
    };
  
    //? Delete Task
    const deleteTask = (id: number) => {
      setTasks(tasks.filter((item) => item.id !== id));
    };
  
    //? Edit Task
    const editTask = (item: TaskProps) => {
      setEdit({
        item,
        edit: true,
      });
    };
  
    //? Update Task
    const updateTask = (newTask: Partial<TaskProps>) => {
        if (!newTask || !newTask.id || !newTask.text) {
            // console.warn('cannot update a task that doesn't exist!);
            return;
        };
        // const toUpdate = tasks[newTask.id]; // .find((task) => task.id === newTask.id);
        // const newTasks = [...tasks.slice(toUpdate.id - 1), {...toUpdate, ...newTask}, ...tasks.slice(toUpdate.id + 1)];
        // setTasks(newTasks);
        setTasks(tasks.map((item) =>
        item.id === newTask.id ? newTask.text ? { ...item, text: newTask.text } : item : item
        )
      );

      document
        .querySelectorAll(".tasks-card")
        .forEach((item) => item.classList.remove("selected"));
    };
  
    //? Task Local Storage
    useEffect(() => {
      // setLocalTask();
      setFilteredTasks(tasks);
    }, [tasks]);
  
    return (
      <TodoContext.Provider
        value={{
          addTask,
          tasks,
          selectedTasks,
          updateTask,
          deleteTask,
          editTask,
          edit,
          setSelectedId,
          selectedId,
          filteredTasks,
          searchTask,
          localCheck,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  };
  export default TodoProvider;
  
  export const useTodo = () => useContext(TodoContext);