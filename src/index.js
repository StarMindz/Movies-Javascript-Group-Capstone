import './style.css';
import * as invApi from './modules/involvementApi.js';
import MoviesManager from './modules/moviesManager.js';
import * as tvMazeApi from './modules/tvmazeApi.js';
import createPages from './modules/page.js';
import getShowData from './/modules/getShowData';
import logo from '../images/logo.png';



const moviesContainer = document.getElementById('moviesSection');
const moviesManager = new MoviesManager(moviesContainer, invApi.addLike);

tvMazeApi.getShows().then((movies) => {
  moviesManager.movies = movies;

  invApi.getLikesHome().then((likes) => {
    moviesManager.likes = likes;
    moviesManager.pageStep = 20;
    moviesManager.display();
    createPages(moviesManager);
  });
});

moviesContainer.addEventListener('click', (event) => {

  const arrMovie = event.path.filter((item) => /movieContainer-\d+/.test(item.id));


  if (
    /starBtn-\d+/.test(event.target.id)
    || /likeBtn-\d+/.test(event.target.id)
    || event.target.classList.contains('movie__footer')
  ) {
    return;
  }

  if (arrMovie.length !== 0) {
    // get the id of the movie
    const movieId = arrMovie[0].id;
    const id = movieId.match(/\d+$/)[0];

    generateModal(id, getShowData, getComments);
  }
});

