import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './Components/Layout/Layout'
import Weighing from './Components/Weighing/Weighing'
import WeighingHistory from './Components/WeighingHistory/WeighingHistory';


class App extends Component {
  render () {
    console.log("render")
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/history" component={WeighingHistory} />
            <Route path="/" exact component={Weighing} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
