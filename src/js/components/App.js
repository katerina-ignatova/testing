import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import lazy from '../helpers/lazy';
import Header from './Header';
import Articles from './Articles';
//import Cat from './Cat';


const asyncCat = lazy(() => import('./Cat.js'));


const HomePage = () => <div className="container">Home Page</div>;

const PrimaryLayout = () => (
  <div className="container">
    <Header />
    <main className="mt-2">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/cat" exact component={asyncCat} />
      </Switch>
    </main>
  </div>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

export default App;