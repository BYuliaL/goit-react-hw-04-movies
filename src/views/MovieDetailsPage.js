import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Axios from "axios";

import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    id: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US`
    );
    // console.log(response.data);

    this.setState({ ...response.data });
    this.setState({ release_date: this.state.release_date.slice(0, 4) });
    // console.log(this.state.movie);
  }

  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    } = this.state;

    const scope = vote_average * 10;

    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <h1>
          {title}({release_date})
        </h1>
        <p>User Score: {scope}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
