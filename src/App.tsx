import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./List";
export interface interfaceInitialState {
  nick: string;
  subMonths: number;
  description: string;
  fixTypeScript?: string;
}

interface AppState {
  initialState: Array<interfaceInitialState>;
  subsNumber: number;
}

const INITiAL_STATE = [
  {
    nick: "test1",
    subMonths: 5,
    description: "this is a typescript example",
  },
  {
    nick: "test2",
    subMonths: 4,
    description: "this is a typescript example 2",
    fixTypeScript: "fixed",
  },
];
function App() {
  const [user, setUser] = useState<AppState["initialState"]>([]);
  // initial state is array of object interfaceInitialState
  const [subsNumber, setSubsNumber] = useState<AppState["subsNumber"]>(0);

  useEffect(() => {
    return () => {
      setUser(INITiAL_STATE);
      // typescript know that INITiAL_STATE is array of object type interfaceInitialState
    };
  }, []);

  return (
    <div className="App">
      <List userData={user}>
        children test typesScript React.FunctionComponent
      </List>
    </div>
  );
}

export default App;
