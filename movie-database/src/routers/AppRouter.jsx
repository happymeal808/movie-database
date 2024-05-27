import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageFavorites from './pages/PageFavorites';
import Header from './components/Header';
import { appTitle } from './globals/globalVariables';

const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header title={appTitle} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/about" component={PageAbout} />
          <Route path="/favorites" component={PageFavorites} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;