import { createContext, useState } from "react";

export const AppContext = createContext<any>({});

const AppContextProvider = (props: any) => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
