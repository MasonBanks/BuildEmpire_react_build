import React, { Component } from 'react';
import * as api from './components/Firebase/firebase'

import './App.css'

class App extends Component {
  state = {
    movieList: []
  }
  styles = {
    appBody: {
      width: "100vw",
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    },
    head: {
      fontSize: "4.5rem",
      padding: "1rem",
      marginBottom: "auto",
      marginTop: "auto",
      textAlign: "center",
      color: "#e91c50",
      position: "sticky"
    },
    form: {
      display: "flex",
      justifyContent: "space-between",
      flexFlow: "column",
      alignItems: "center"
    },
    submit: {
      alignItems: "center",
      height: "fit-content"
    },
    list: {
      border: "1px solid grey",
      alignItems: "center",
      borderRadius: "15px",
      height: "-webkit-fill-available",
      marginLeft: "20%",
      marginRight: "20%",
      listStyle: "none",
      overflowY: "scroll",
      display: "flex",
      flexDirection: 'column',
    },
    listItem: {
      display: "flex",
      padding: "15px",
      justifyContent: "space-between",
      borderBottom: ".5px solid grey",
      width: "300px"
    },
    moviePoster: {
      display: "flex",
      alignItems: 'center',
    },
    poster: {
      width: "auto",
      height: "50px"
    },
    card: {
      textAlign: "left"
    }
  }
  render() {
    let movies = this.state.movieList;
    let style = this.styles;
    return (
      <div style={style.appBody}>
        <h1 style={style.head}>Movies:</h1>
        <form action='#' style={style.form} onSubmit={this.addMovie}>
          <input type="text" placeholder="Title..." required={true} className='form-title' />
          <input type="text" placeholder="Description..." required={true} className='form-description' />
          <input type="text" placeholder="Image URL..." required={true} className='form-image-url' />
          <input id="submitButton" type="submit" style={style.submit} value="Add Movie" />
        </form>
        <ul style={style.list}>
          {movies.map((a, b) => {
            return <li style={style.listItem} key={b}>
              <div style={style.card}>
                <p>{a.title}</p>
                <p>{a.description}</p>
              </div>
              <div style={style.moviePoster}>
                <img style={style.poster} src={a.image} alt="movie poster" />
              </div>
            </li>
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.getMovies();
  }
  getMovies = () => {
    api.getMovieList()
      .then((movie) => {
        this.setState({
          movieList: movie.sort(function (a, b) { return b - a })
        })
      })
  }
  addMovie = (event) => {
    const testMovie = {
      title: "Avengers Endgame",
      description: "Action/Adventure",
      image: "https://images-na.ssl-images-amazon.com/images/I/81AXHGbXc9L._SY879_.jpg"
    }
    event.preventDefault();
    api.addMovie(testMovie)
    this.setState({
      movieList: [testMovie]
    })
  }
}

export default App;