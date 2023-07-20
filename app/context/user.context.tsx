import { useContext, useState, createContext } from "react";
import type { User } from '~/models/user.server';

export type FormattedUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  password_hash: string;
  role: string;
  avatarUrl: string | null;
  notificationsCount: number;
  firstName: string | null;
  lastName: string | null;
  streetAddress: string | null;
  unit: string | null;
  city: string | null;
    state: string | null;
    zipCode: string | null;
};

export interface UserContextType {
   // [key: string]?: keyof User
  user?: FormattedUser
};

const UserContext = createContext<UserContextType>({user: undefined});

export function useUserContext(): UserContextType {
    return useContext<UserContextType>(UserContext);
};

export default UserContext;