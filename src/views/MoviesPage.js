import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";

// import SearchForm from "../components/SearchForm";

class MoviesPage extends Component {
  state = {};

  // onChangeQuery = (query) => {
  //   const apiKey = "bfc0b177c45bde411d6d53ddc48eee25";
  //   Axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`
  //   ).then((response) => {
  //     this.setState({ movies: response.data.results });
  //   });
  // };

  render() {
    // const { movies } = this.state;
    // console.log(this.props.match.url);

    return (
      <>
        <h1>ffffffffff</h1>
        {/* <SearchForm /> */}
        {/* <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {title}

                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={title}
                />
              </Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MoviesPage;
