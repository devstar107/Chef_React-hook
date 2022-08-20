import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from '../containers/HomePage';
  const WebRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/addrecipe' element={<AddRecipe/>} />
        <Route path='/recipebook' element={<RecipeBook/>} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/shoppingList' element={<ShoppingList />} />
        <Route path='/recipebook/:recipeId' element={<Recipe/>} />
        <Route path='/update-recipe/:recipeId' element={<AddRecipe/>} /> */}
      </Routes>
    )
  }

  export default WebRoutes;