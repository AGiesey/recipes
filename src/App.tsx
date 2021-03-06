import React from 'react';

function App() {
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
          <input type="text" id="recipeTitle" className="form-control"/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="recipeIngredients" className="form-label">Ingredients</label>
          <textarea className="form-control"id="recipeIngredients"></textarea>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="recipeDirections" className="form-label">Directions</label>
          <textarea className="form-control" id="recipeDirections"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
