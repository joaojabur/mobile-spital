import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

interface RegisterContextData {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

interface RegisterProviderProps {
  children: ReactNode;
}

export const RegisterContext = createContext({} as RegisterContextData);

export default function RegisterProvider({ children }: RegisterProviderProps) {
  const [userData, setUserData] = useState<UserData>({} as UserData);

  let value = {
    userData,
    setUserData,
  } as RegisterContextData;

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);

  return context;
}
