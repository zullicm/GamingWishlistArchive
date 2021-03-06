import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Archive from './Components/Archive';
import Favorite from './Components/Favorite';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Wishlist from './Components/Wishlist';

function App() {



  return (
    <div className="App">
        <NavBar/>
        <div className='main-content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/archive">
            <Archive />
          </Route>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
          <Route path='*'>
            <h1>404 Page Not Found</h1>
            <h3>Try clicking the "Gaming Library" logo at the top left of the page</h3>
          </Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;