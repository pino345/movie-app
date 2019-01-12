import React, {Component} from 'react';
import './Movie.css';


class Movie extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src="https://images-na.ssl-images-amazon.com/images/I/51H7uat%2BYwL._SY445_.jpg"></img>
        )
    }
}
export default Movie