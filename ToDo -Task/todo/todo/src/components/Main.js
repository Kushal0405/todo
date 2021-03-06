import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Todo from "./Todo";


const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Todo} />
        <Route exact path='/todo' component={Todo} />
      </Switch>
  </main>
)

export default Main;
