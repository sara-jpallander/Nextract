"use client";

import {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export type User = {
  id: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    const userData = Cookies.get("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (userData: User, token: string) => {
    Cookies.set("token", token, { expires: 1 });
    Cookies.set("user", JSON.stringify(userData), { expires: 1 });
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    setUser(null);

    router.push("/log-in");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
