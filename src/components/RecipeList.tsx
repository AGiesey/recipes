import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { Recipe } from '../models/Recipe';

export const RecipeList = (props: any) => {
  const [recipes, setRecipes] = useState<any>([])

  useEffect(() => {

    database.collection('recipes')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        console.log(data);
        setRecipes(data)
      });
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Recipes</h1>
          <ul className="list-group">
            {recipes.map((recipe: Recipe) => {
              return (
                <li className="list-group-item" key={recipe.id}>{recipe.title}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}