import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Axios from "axios";

import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movie: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US`
    );
    console.log(response.data);

    this.setState({ movie: response.data });
    console.log(this.state.movie);
  }

  render() {
    const { movie } = this.state;

    const scope = movie.vote_average * 10;

    return (
      <>
        <h1>
          {movie.title}({movie.release_date})
        </h1>
        <p>User Score: {scope}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        {/* <ul>
          {movie.genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul> */}
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
