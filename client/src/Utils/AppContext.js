import React, { useState, useContext } from 'react';

// const useRecipeModel = () => {
//   const [individualRecipe, setIndividualRecipe] = useState({});
//   return {
//     individualRecipe,
//     setIndividualRecipe
//   };
// };

// const emptyContext = [null, () => {}];
// const RecipeContext = React.createContext(emptyContext);
// const RecipeContextProvider = RecipeContext.Provider;
// export const useRecipeProvider = () => {
//   const res = useContext(RecipeContext);
//   return res ? res : emptyContext;
// };
// /**
//  * Provider Component
//  */
// export const RecipeProvider = ({ children }) => {
//   const RecipeModel = useRecipeModel();
//   return (
//     <RecipeContextProvider value={RecipeModel}>
//       {children}
//     </RecipeContextProvider>
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
