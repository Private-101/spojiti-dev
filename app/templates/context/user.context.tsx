import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useCallback,
  } from "react";
  import useLocalStorage from "~/hooks/useLocalStorage";

  interface IType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    loggedInUser: {
      username: string;
      password: string;
    };
    setUser: React.Dispatch<
      React.SetStateAction<{
        username: string;
        password: string;
      }>
    >;
    localUserCheck: () => void;
    localUser: (user: { username: string }) => void;
  }
  const UserContext = createContext<IType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    loggedInUser: {
      username: "",
      password: "",
    },
    setUser: () => {},
    localUser: () => {},
    localUserCheck: () => {},
  });
  
  export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loggedInUser, setUser] = useState({
      username: "",
      password: "",
    });
  
    const localUser = useCallback((user: { username: string }) => {
        if (isLoggedIn) return {username: loggedInUser.username};
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(user));
      },
      [isLoggedIn, loggedInUser]
    );
  
    const localUserCheck = useCallback(() => {
      const getlocalUser = localStorage.getItem("user");
      if (getlocalUser) {
        setIsLoggedIn(true);
        const user = JSON.parse(getlocalUser);
        setUser(user);
      } else if (isLoggedIn || loggedInUser.username.length > 1) {
        setIsLoggedIn(false);
        setUser({username: "", password: ""});
      };

      if (!getlocalUser) {
        setIsLoggedIn(false);
        setUser({username: "", password: ""});
      }
    }, [isLoggedIn, loggedInUser.username.length]);
  
    const value = {
      isLoggedIn,
      setIsLoggedIn,
      loggedInUser,
      setUser,
      localUser,
      localUserCheck,
    };
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };
  export default UserProvider;
  export const useUserContext = () => useContext(UserContext);