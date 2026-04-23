import React from "react";
import Navbar from "./components/Navbar";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Navbar />
      </DataProvider>
    </div>
  );
};

export default App;
