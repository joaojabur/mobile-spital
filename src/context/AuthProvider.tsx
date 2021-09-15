import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

import api from "../services/api";
import { AsyncStorage } from "react-native";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  xp: number;
}

interface AuthContextData {
  user: User;
  authenticated: boolean;
  confirmed: boolean;
  userID: number | null;
  signIn(email: string, password: string): Promise<any>;
  signOut(): Promise<any>;
  signUp(user: User): Promise<any>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [userID, setUserID] = useState<number | null>(null);

  async function logout() {
    await AsyncStorage.removeItem("@Spital:token");

    setUser(null);
  }

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = await AsyncStorage.getItem("@Spital:token");

      if (storagedToken) {
        loginWithToken();
      }
    }

    loadStoragedData();
  }, []);

  async function login(email: string, password: string) {
    let response;
    try {
      response = await api.post("clients/login", {
        email: email,
        password: password,
      });

      let { token, id, confirmed } = response.data;

      console.log(response.data);

      if (confirmed) {
        setConfirmed(true);

        await AsyncStorage.setItem("@Spital:token", token);

        setUserID(id);

        getUserData(id);
      }

      return response;
    } catch (error) {
      return error?.response?.data ?? { error: error.message };
    }
  }

  async function loginWithToken() {
    let response = await api.get("clients/auth", {
      headers: {
        Authorization: AsyncStorage.getItem("@Spital:token"),
      },
    });

    let { auth, userID, confirmed } = response.data;

    if (auth) {
      setUserID(userID);
      setConfirmed(confirmed);
      getUserData(userID);
    }
  }

  async function getUserData(id: number) {
    try {
      let response = await api.get(`clients?id=${id}`);

      setUser({
        ...response.data,
      });
    } catch (error) {
      if (error.response.status === 404) {
        console.log("Not found!");
      }
    }
  }

  async function signup(user: User) {
    const response = await api.post("clients", {
      ...user,
    });
    console.log(response);

    return response;
  }

  let value = {
    user,
    userID,
    authenticated: user !== null,
    signIn: login,
    signOut: logout,
    signUp: signup,
  } as AuthContextData;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
