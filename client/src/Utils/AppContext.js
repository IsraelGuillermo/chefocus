import React, { useState, createContext } from 'react';

const initialState = {
  id: '',
  email: ''
};

export const AppContext = createContext();

const StoreUser = ({ children }) => {
  const [userID, setUserID] = useState(initialState);
  return (
    <AppContext.Provider value={[userID, setUserID]}>
      {children}
    </AppContext.Provider>
  );
};

export default StoreUser;

// const emptyContext = [null, () => {}];
// const ViewerContext = React.createContext(emptyContext);
// const ViewerContextProvider = ViewerContext.Provider;
// export const useViewerProvider = () => {
//   const res = useContext(ViewerContext);
//   return res ? res : emptyContext;
// };
// /**
//  * Provider Component
//  */
// export const ViewerProvider = ({ children }) => {
//   const viewerModel = useViewerModel();
//   return (
//     <ViewerContextProvider value={viewerModel}>
//       {children}
//     </ViewerContextProvider>
//   );
// };

// const userModel = () => {
//   const [user, setUser] = useState({
//     id: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     token: ''
//   });
//   return {
//     user,
//     setUser
//   };
// };
