import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AppointmentData {
  date: string;
  time: string;
  doctorName: string;
  type: string;
  price: string;
}

interface MedicContextData {
  appointmentData: AppointmentData;
  setAppointmentData: Dispatch<SetStateAction<AppointmentData>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

interface MedicProviderProps {
  children: ReactNode;
}

const MedicContext = createContext({} as MedicContextData);

export default function MedicProvider({ children }: MedicProviderProps) {
  const [appointmentData, setAppointmentData] = useState({} as AppointmentData);
  const [error, setError] = useState<string>("");

  let value = {
    appointmentData,
    setAppointmentData,
    error,
    setError,
  } as MedicContextData;

  return (
    <MedicContext.Provider value={value}>{children}</MedicContext.Provider>
  );
}

export function useMedic() {
  const context = useContext(MedicContext);

  return context;
}
