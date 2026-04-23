import React from "react";
import { useData } from "../context/DataContext";

const Navbar = () => {
  const { users } = useData();

  console.log(users);
  return (
    <nav>
      <h1>{users.length}</h1>
    </nav>
  );
};

export default Navbar;
