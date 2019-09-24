const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyDzqORQintOdfJ0qAdOnVoRUIeVmpIYRek",
  authDomain: "buildempire-tech-test.firebaseapp.com",
  databaseURL: "https://buildempire-tech-test.firebaseio.com",
  projectId: "buildempire-tech-test",
  storageBucket: "buildempire-tech-test.appspot.com",
  messagingSenderId: "536123205960",
  appId: "1:536123205960:web:bbad0814ad57d0d963eb7d"
};
const { database } = firebase;
firebase.initializeApp(config);

exports.getMovieList = () => database()
  .ref('/')
  .once('value')
  .then(movieData => movieData.val());

exports.addMovie = (title, description, image) => database()
  .ref('/')