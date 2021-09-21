import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Point } from "react-native-google-places-autocomplete";

interface LocationContextData {
  location: string | null;
  setLocation: Dispatch<SetStateAction<string | null>>;
  coordinates: Point;
  setCoordinates: Dispatch<SetStateAction<Point | undefined>>;
}

interface LocationProviderProps {
  children: ReactNode;
}

const LocationContext = createContext({} as LocationContextData);

export default function LocationProvider({ children }: LocationProviderProps) {
  const [location, setLocation] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<Point | undefined>(undefined);

  let value = {
    location,
    setLocation,
    coordinates,
    setCoordinates,
  } as LocationContextData;

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);

  return context;
}
