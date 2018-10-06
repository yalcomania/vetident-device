import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <>
      <Header></Header>
      <Layout></Layout>
      </>
    );
  }
}

export default App;
