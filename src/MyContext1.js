// src/MyContext.js
import React, { createContext, useState } from 'react';
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const registerUser = (user) => setUsers([...users, user]);

  return (
    <MyContext.Provider value={{ users, registerUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };