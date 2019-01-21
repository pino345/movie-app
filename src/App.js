import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
  },
  {
    title: "Bohemian rhapsody",
    poster: "https://i.redd.it/lp0b1ev8exs11.jpg"
  },
  {
    title: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "The great gatsby",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg"
  }
]


class App extends Component {

  // render: componentWillMount() => render() => componentDidMount()

  // Update componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()

  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    console.log('did mount')
  }

  render() {
    console.log('did render')
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
