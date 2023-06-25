import "./App.css";
import { createContext, useEffect, useState } from "react";

import Landing from "./pages/landing";
import { Data, useFetchData } from "./hooks/useFetchData";

export const petEcomContext = createContext({});

function App() {
  const data = useFetchData();

  return (
    <>
      <petEcomContext.Provider value={{ data }}>
        <Landing />
      </petEcomContext.Provider>
    </>
  );
}

export default App;
