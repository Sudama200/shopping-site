import { createContext, useReducer } from "react";
import { UserReducer } from "../reducer/userReducer/UserReducer";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, state);

  const { currentUser } = state;


  

  return <UserContext.Provider >{children}</UserContext.Provider>;
};

export default UserReducer;
