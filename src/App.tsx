import { createContext } from "react";
import DATA from "../data.json";
import "./App.css";

import { Data } from "./hooks/useFetchData";
import Landing from "./pages/landing";

export const petEcomContext = createContext<Data | undefined>(DATA);

function App() {
  // const { data, isLoading, isError } = useFetchData();

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  return (
    <>
      <petEcomContext.Provider value={DATA}>
        <Landing />
      </petEcomContext.Provider>
    </>
  );
}

export default App;
