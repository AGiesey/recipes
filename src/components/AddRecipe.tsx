import React, { useState } from 'react';
import { database, auth } from '../firebase';
import { Recipe } from '../models/Recipe';
import './AddRecipe.scss';

export const AddRecipe = () =>
{
  const recipesRef = database.collection("recipes");
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [activeTab, setActiveTab] = useState('info');

  const onTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const onIngredientsChange = (e: any) => {
    setIngredients(e.target.value);
  }

  const onDirectionsChange = (e: any) => {
    setDirections(e.target.value);
  }

  const onChangeTab = (e: React.MouseEvent<HTMLElement>) => {
    const {id} = e.currentTarget;
    setActiveTab(id)
  }


  const onSubmit = () => {
    if (!title || !ingredients || !directions) return;

    console.log(auth.currentUser);

    let recipe = {
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
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 'info' ? "active" : null}`} onClick={onChangeTab} id="info" type="button">Info</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 'ingredients' ? "active" : null}`} onClick={onChangeTab} id="ingredients" type="button">Ingredients</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 'directions' ? "active" : null}`} onClick={onChangeTab} id="directions" type="button">Directions</button>
        </li>
      </ul>
      <div className="add-recipe-tabs tab-content">
        <div className={`tab-pane fade ${activeTab === 'info' ? "show active" : null}`}>
          <div className="row">
            <div className="col">
              <label htmlFor="recipeTitle" className="form-label">Title</label>
              <input type="text" id="recipeTitle" className="form-control" onChange={onTitleChange}/>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 'ingredients' ? "show active" : null}`}>
          <div className="row">
            <div className="col">
              <label htmlFor="recipeIngredients" className="form-label">Ingredients</label>
              <textarea className="form-control"id="recipeIngredients" onChange={onIngredientsChange}></textarea>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${activeTab === 'directions' ? "show active" : null}`}>
          <div className="row">
            <div className="col">
              <label htmlFor="recipeDirections" className="form-label">Directions</label>
              <textarea className="form-control" id="recipeDirections" onChange={onDirectionsChange}></textarea>
            </div>
          </div>
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

/*
<label htmlFor="recipeTitle" className="form-label">Title</label>
<input type="text" id="recipeTitle" className="form-control" onChange={onTitleChange}/>

<label htmlFor="recipeIngredients" className="form-label">Ingredients</label>
<textarea className="form-control"id="recipeIngredients" onChange={onIngredientsChange}></textarea>

<label htmlFor="recipeDirections" className="form-label">Directions</label>
<textarea className="form-control" id="recipeDirections" onChange={onDirectionsChange}></textarea>
*/