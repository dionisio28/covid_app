import React, { createContext, useCallback, useState } from "react";
import { getPlaces } from "../service";
import OverviewContextProps from "../types/Overview.type";
import { Places } from "../types/Places.type";

const OverviewContext = createContext<OverviewContextProps>(
  {} as OverviewContextProps
);

const OverviewProvider: React.FC = ({ children }) => {
  const [places, setPlaces] = useState<Places>({} as Places);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadPlaces = useCallback(async () => {
    try {
      const response = await getPlaces();
      if (response.status == 200) {
        setPlaces(response.data);
      }
    } catch (error) {
      //TODO MAKE SOME TOAST
    } finally {
      setIsLoading(false);
    }
  }, [places]);

  return (
    <OverviewContext.Provider
      value={{
        places,
        isLoading,
        loadPlaces,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
};

export default OverviewProvider;
