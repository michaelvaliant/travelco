import React, { createContext, useState, useContext } from "react";

// Membuat context
const AppContext = createContext();

// Membuat provider untuk mengelola state aplikasi
export const AppProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{ selectedTicket, setSelectedTicket, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useAppContext = () => {
  return useContext(AppContext);
};
