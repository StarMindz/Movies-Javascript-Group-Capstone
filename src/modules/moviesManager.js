export default class MoviesManager {
    #parentContainer;

    #callBackAddLikeAsync;

    #totalItems = 0;

    #actualPage = 1;

    #rangeDisplayed = '';

    #itemsDisplayed = 0;

    #totalPages = 0;

    #pageStep = 30;

    #movies = [];

    #likes = [];

    constructor(container, callBackAddLikeAsync) {
      this.#parentContainer = container;
      this.#callBackAddLikeAsync = callBackAddLikeAsync;
    }

    set movies(movies) {
      this.#movies = movies;
      this.#totalItems = movies.length;
    }

    set likes(likes) {
      this.#likes = likes;
    }

    set pageStep(step) {
      this.#pageStep = step;
    }

    get parentContainer() {
      return this.#parentContainer;
    }

    get totalItems() {
      return this.#totalItems;
    }

    get totalPages() {
      return this.#totalPages;
    }

    get actualPage() {
      return this.#actualPage;
    }

    get itemsDisplayed() {
      return this.#itemsDisplayed;
    }

    get rangeDisplayed() {
      return this.#rangeDisplayed;
    }

    * getArrPages() {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= this.#totalPages; i++) {
        yield i;
      }
    }

    display(page = 1) {
      const arr = this.#paginate(page);

      arr.forEach((item) => {
        const movie = this.#createMovie(item);
        this.#parentContainer.append(movie);
      });
    }

    clearParent() {
      this.#parentContainer.textContent = '';
    }

    #paginate(page = 1) {
      let initialIndex = 0;
      let finalIndex = 0;

      finalIndex = this.#pageStep * page;
      initialIndex = finalIndex - this.#pageStep;

      // in case final index is out of the boundaries of the arr
      if (finalIndex > this.#totalItems) {
        finalIndex = this.#totalItems;
      }

      this.#actualPage = page;
      this.#itemsDisplayed = finalIndex - initialIndex;
      this.#rangeDisplayed = `${initialIndex} to ${finalIndex}`;
      this.#totalPages = Math.ceil(this.#totalItems / this.#pageStep) || 0;
      return this.#movies.slice(initialIndex, finalIndex);
    }

    // eslint-disable-next-line class-methods-use-this
    #createMovie(data) {
      const movieContainer = document.createElement('article');
      const img = document.createElement('img');
      const movieBody = this.#createMovieBody(data);
      const footerMovie = this.#createFooter(data.id);

      movieContainer.className = 'movie';
      img.className = 'movie__img';

      img.src = data.image.medium;

      movieContainer.id = `movieContainer-${data.id}`;

      movieContainer.append(img, movieBody, footerMovie);
      return movieContainer;
    }

    // eslint-disable-next-line class-methods-use-this
    #createMovieBody({ name, summary }) {
      const movieBody = document.createElement('section');
      const title = document.createElement('h3');
      const description = document.createElement('p');

      movieBody.className = 'movie__body';
      title.className = 'movie__body__title';
      description.className = 'movie__body__description';

  
      summary = summary.replace(/<[^b]>|<\/[^b]>/g, '');

      title.textContent = name;
      description.innerHTML = `${summary.substring(0, 70)}...`;

      movieBody.append(title, description);
      return movieBody;
    }

    // eslint-disable-next-line class-methods-use-this
    #createFooter(id) {
      // eslint-disable-next-line camelcase
      const arrLikes = this.#likes.filter(({ item_id }) => item_id === id);

      const footer = document.createElement('section');
      const auxiliarDiv1 = document.createElement('div');
      const auxiliarDiv2 = document.createElement('div');
      const starInfo = document.createElement('span');
      const likeInfo = document.createElement('span');
      const starIcon = document.createElement('i');
      const likeIcon = document.createElement('i');
      const buttonCom = document.createElement('button');
      const buttonRes = document.createElement('button1');

      footer.className = 'movie__footer';
      starIcon.className = 'fa-solid fa-star star-btn';
      likeIcon.className = 'fa-solid fa-heart like-btn';
      starInfo.className = 'info';
      buttonCom.className = 'btn';
      buttonRes.className = 'btn';
      // starInfo.id = 'starInfo';
      // likeInfo.id = 'likeInfo';
      starIcon.id = `starBtn-${id}`;
      likeIcon.id = `likeBtn-${id}`;

      // check if the movie has info about likes first
      if (arrLikes.length !== 0) {
        const { likes, stars } = arrLikes[0];
        starInfo.textContent = stars;
        likeInfo.textContent = likes;
      }

      likeIcon.addEventListener('click', () => {
        likeIcon.classList.add('fa-beat', 'active');
        likeIcon.style = '--fa-animation-duration: 0.5s;';
        const promise = this.#callBackAddLikeAsync(id);

        promise.then((result) => {
          const { status } = result;
          if (status === 201) {
            const previousLikes = parseInt(likeInfo.textContent, 10) || 0;
            likeInfo.textContent = 'added!';

            setTimeout(() => {
              likeInfo.textContent = previousLikes + 1;
            }, 1200);
          }
        });

        promise.finally(() => {
          likeIcon.classList.remove('fa-beat', 'active');
          likeIcon.style = '';
        });
      });

      auxiliarDiv1.append(starInfo, starIcon);
      auxiliarDiv2.append(likeInfo, likeIcon);

      footer.append(auxiliarDiv2);
      return footer;
    }
}