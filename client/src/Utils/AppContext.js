import React, { useState, useContext } from 'react';

// const initialState = {
//   id: '',
//   email: ''
// };

// export const AppContext = createContext();

// const StoreUser = ({ children }) => {
//   const [userID, setUserID] = useState(initialState);
//   return (
//     <AppContext.Provider value={[userID, setUserID]}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default StoreUser;

const useUserModel = () => {
  const [userID, setUserID] = useState({
    id: '',
    email: '',
    photo: '',
    username: ''
  });
  return {
    userID,
    setUserID
  };
};

const emptyContext = [null, () => {}];
const UserContext = React.createContext(emptyContext);
const UserContextProvider = UserContext.Provider;
export const useUserProvider = () => {
  const res = useContext(UserContext);
  return res ? res : emptyContext;
};
/**
 * Provider Component
 */
export const UserProvider = ({ children }) => {
  const userModel = useUserModel();
  return (
    <UserContextProvider value={userModel}>{children}</UserContextProvider>
  );
};
