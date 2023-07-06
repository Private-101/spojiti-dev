import { useContext, useState, createContext } from "react";
import type { User } from '~/models/user.server';

export interface UserContextType {
   // [key: string]?: keyof User
  user?: User
};

const UserContext = createContext<UserContextType>({user: undefined});

export function useUserContext(): UserContextType {
    return useContext<UserContextType>(UserContext);
};

export default UserContext;