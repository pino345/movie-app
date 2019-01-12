import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  "Matrix", 
  "Bohemian rhapsody", 
  "Inception", 
  "The great gatsby"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]}/>
        <Movie title={movies[1]}/>
        <Movie title={movies[2]}/>
        <Movie title={movies[3]}/>
      </div>
    );
  }
}

export default App;
