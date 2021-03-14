import React, { useEffect, useState } from 'react';
import { AddRecipe } from './components/AddRecipe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RecipeList } from './components/RecipeList';
import { Recipe } from './components/Recipe';
import { auth } from './firebase';
import { MainLayout } from './components/MainLayout';

function App() {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if(!auth.currentUser) {
      auth.signInAnonymously()
        .then(userCredential => {
          setLoading(false);
        })
    }
  }, [])

  return (
    <Router>
      <nav className="navbar navbar-dark fixed-top bg-dark">
        <h2 className="nav-brand text-white-50">Adam's Kitchen</h2>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-disabled={loading}>Add Recipe</Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link text-white" aria-disabled={loading}>Recipe List</Link>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <Switch>
            <Route exact path="/">
              <MainLayout>
                <AddRecipe />
              </MainLayout>
            </Route>
            <Route path="/recipes">
              <MainLayout>
                <RecipeList />
              </MainLayout>
            </Route>
            <Route path="/recipes/:recipe-id"> {/* todo: add route params */}
              <MainLayout>
                <Recipe  />
              </MainLayout>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
