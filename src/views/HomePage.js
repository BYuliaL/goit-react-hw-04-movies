import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=bfc0b177c45bde411d6d53ddc48eee25"
    );
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
    // console.log(this.state.movies);
  }

  render() {
    const { movies } = this.state;
    // console.log(this.props.match.url);

    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {title}

                {/* <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                /> */}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
