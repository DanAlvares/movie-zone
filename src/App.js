import React, { Component } from 'react';
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Movies />
      </div>
    );
  }
}

export default App;
