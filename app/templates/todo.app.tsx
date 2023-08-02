import { type FC, useEffect, useCallback } from "react";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";

import { Login, Navbar, TodoForm, TodoList } from "./components";

import { TodoProvider, UserProvider } from "./context";
import { useTheme } from "./context/theme.context";
import { useUserContext } from "./context/user.context";

const App: FC = () => {
  const { theme } = useTheme();
  const { isLoggedIn } = useUserContext();

  return (
    <TodoProvider>
      <main className={`app ${theme}`}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <TodoForm />
                  <TodoList />
                </>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </main>
    </TodoProvider>
  );
};

export default App;