import React, { useState } from "react";

const UserProgressContex = React.createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContexProvider({ children }) {

  const [userProgress, setUserProgress] = useState("");

  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };
  const showCheckout = () => {
    setUserProgress("checkout");
  };
  const hideCheckout = () => {
    setUserProgress("");
  };

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContex.Provider value={userProgressCtx}>
      {children}
    </UserProgressContex.Provider>
  );
}

export default UserProgressContex;
