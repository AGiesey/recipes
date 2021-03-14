import React, { useState } from 'react';
import { database, auth } from '../firebase';

interface Recipe {
  createdBy: string;
  title: string;
  ingredients: string;
  directions: string;
}

export const AddRecipe = () =>
{
  const recipesRef = database.collection("recipes");
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const onTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const onIngredientsChange = (e: any) => {
    setIngredients(e.target.value);
  }

  const onDirectionsChange = (e: any) => {
    setDirections(e.target.value);
  }

  const onSubmit = () => {
    if (!title || !ingredients || !directions) return;

    console.log(auth.currentUser);

    let recipe = {
      createdBy: auth.currentUser?.uid,
      title: title,
      ingredients: ingredients,
      directions: directions,
    } as Recipe;

    recipesRef.add(recipe);
    setTitle('');
    setIngredients('');
    setDirections('');
  }

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col">
          <h1>Add Recipe</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="recipeTitle" className="form-label">Title</label>
          <input type="text" id="recipeTitle" className="form-control" onChange={onTitleChange}/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="recipeIngredients" className="form-label">Ingredients</label>
          <textarea className="form-control"id="recipeIngredients" onChange={onIngredientsChange}></textarea>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="recipeDirections" className="form-label">Directions</label>
          <textarea className="form-control" id="recipeDirections" onChange={onDirectionsChange}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary" onClick={onSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}