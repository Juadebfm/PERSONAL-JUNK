import { createContext, useContext, useEffect, useState } from "react";

// Is to use the Create context method.
const DataContext = createContext();

export function DataProvider({ children }) {
  // users = []
  const [users, setUsers] = useState([]);

  // We make the get http request
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data)) // user = [...data]
      .catch((error) => console.log(error));
  }, []);

  return (
    <DataContext.Provider value={{ users }}>{children}</DataContext.Provider>
  );
}

// custom hook
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Date from our context is currently not available");
  }

  return context;
}
