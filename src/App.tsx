import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { SignUp } from './features/signup/components/signup';
import { Home } from './features/home/components/home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
