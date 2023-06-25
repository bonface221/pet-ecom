import "./App.css";
import { createContext, useEffect, useState } from "react";

import Landing from "./pages/landing";
import { Data, useFetchData } from "./hooks/useFetchData";

export const petEcomContext = createContext<Data | undefined>(undefined);

function App() {
  const { data, isLoading, isError } = useFetchData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <petEcomContext.Provider value={data}>
        <Landing />
      </petEcomContext.Provider>
    </>
  );
}

export default App;
