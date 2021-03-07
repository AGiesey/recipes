import React from 'react';
import { AddRecipe } from './components/AddRecipe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MyRecipes } from './components/MyRecipes';
import { Recipe } from './components/Recipe';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <h1>Adam's Kitchen</h1>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/">Add Recipe</Link>
                </li>
                <li className="nav-item">
                  <Link to="/recipes">My Recipes</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <AddRecipe />
            </Route>
            <Route path="/recipes">
              <MyRecipes />
            </Route>
            <Route path="/recipes/:recipe-id"> {/* todo: add route params */}
              <Recipe  />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
