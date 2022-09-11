import * as invApi from './involvementApi.js';

const pageInfo = document.getElementById('pageInfo');
const pageList = document.getElementById('pageList');
const text1 = document.createElement('span');
const text2 = document.createElement('span');
pageInfo.append(text1, text2);

const createPages = (moviesManager) => {
  const arrPages = [...moviesManager.getArrPages()];
  text1.textContent = `page: ${moviesManager.actualPage}, showing ${moviesManager.itemsDisplayed} titles`;
  text2.textContent = `from ${moviesManager.rangeDisplayed}. Total titles: ${moviesManager.totalItems}`;

  arrPages.forEach((page) => {
    const li = document.createElement('li');
    li.className = 'li-page';
    li.textContent = page;

    li.addEventListener('click', () => {
      pageClickHandler(moviesManager, li, page);
    });

    pageList.append(li);
  });

  const first = pageList.querySelectorAll('li')[0];
  first.classList.add('active');
};

const pageClickHandler = (moviesManager, li, page) => {
  const { parentContainer } = moviesManager;
  // select the previous element with the class active and remove it
  const arrItems = pageList.querySelectorAll('.active');
  arrItems.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');

  runAnimation(parentContainer).then(() => {
    window.scrollTo(0, 0);
    moviesManager.clearParent();
    moviesManager.display(page);
    text1.textContent = `page: ${moviesManager.actualPage}, showing ${moviesManager.itemsDisplayed} titles`;
    text2.textContent = `from ${moviesManager.rangeDisplayed}. Total titles: ${moviesManager.totalItems}`;
    window.history.pushState(
      { prevUrl: window.location.href },
      'title',
      `page-${page}`
    );
  });
};

const runAnimation = (parentContainer) => {
  // add a class to all the cards
  const movies = parentContainer.querySelectorAll('.movie');
  movies.forEach((movie) => movie.classList.add('animationOut'));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

export default createPages;
