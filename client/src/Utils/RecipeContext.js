import React, { useState, useContext } from 'react';

const useRecipeModel = () => {
  const [individualRecipe, setIndividualRecipe] = useState({
    UserId: '',
    createdAt: '',
    id: '',
    imageFood: '',
    ingredients: '',
    instructions: '',
    prepHours: '',
    prepMinutes: '',
    recipeName: '',
    servings: '',
    updatedAt: ''
  });
  return {
    individualRecipe,
    setIndividualRecipe
  };
};

const emptyContext = [null, () => {}];
const RecipeContext = React.createContext(emptyContext);
const RecipeContextProvider = RecipeContext.Provider;
export const useRecipeProvider = () => {
  const res = useContext(RecipeContext);
  return res ? res : emptyContext;
};
/**
 * Provider Component
 */
export const RecipeProvider = ({ children }) => {
  const RecipeModel = useRecipeModel();
  return (
    <RecipeContextProvider value={RecipeModel}>
      {children}
    </RecipeContextProvider>
  );
};
