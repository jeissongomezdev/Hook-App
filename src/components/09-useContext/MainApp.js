import React from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const user = {
    id: 1234,
    name: "Jeisson",
    email: "jeissongomez@hotmail.es",
  };
  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};
