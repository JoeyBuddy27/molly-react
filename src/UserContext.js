import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);
  const [currentItem2, setCurrentItem2] = useState(1);

  return (
    <UserContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        currentContent,
        setCurrentContent,
        currentItem2,
        setCurrentItem2,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
