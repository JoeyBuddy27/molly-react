import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);
  // const currentItem2 = currentItem + 1;
  // const currentItem3 = currentItem2 + 1;
  const [currentItem2, setCurrentItem2] = useState(1);
  const [currentItem3, setCurrentItem3] = useState(2);

  return (
    <UserContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        currentContent,
        setCurrentContent,
        currentItem2,
        setCurrentItem2,
        currentItem3,
        setCurrentItem3,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
