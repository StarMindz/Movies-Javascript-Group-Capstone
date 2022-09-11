import { getShows } from './tvmazeApi.js'; // eslint-disable-line
import getShowData from './getShowData.js';
import { getComment, addComment } from './commentApi.js';

const commentPopUp = async (id) => {
  const shows = await getShowData(id);
  const commentss = await getComment(id);
  const popUpObject = document.querySelector('.comments');
  const overlay = document.getElementById('overlay');

  popUpObject.innerHTML = `
  <p class='cancel-pup-up'>&times;</p>
  <img class='comment-img' src='${shows.image.medium}'>
  <div class='comment-info'>
    <h3 class='summary'>Synopsis</h3>
    <p class='series-desc'>${shows.summary.replaceAll(
      /<b>|<\/b>|<p>|<\/p>/g,
      ''
    )}</p>
    <h2>Movie Infos</h2>
    <p class='reserve-title'>Name: ${shows.name}</p>
    <p class='reserve-stat'>Length: ${shows.averageRuntime} hours</p>
    <p class='reserve-stat'>Premiered: ${shows.premiered}</p>
    <p class='reserve-stat'>Ended: ${
      shows.ended ? shows.ended : 'still showing'
    }</p>
    <p class='reserve-stat'>Language: ${shows.language}</p>
    <p class='reserve-stat'>Ratings: ${
      shows.rating.average ? shows.rating.average : 'not available'
    }</p>
  </div>
  <div class='comment-list'>
  <h2> Comments </h2>
  ${
    commentss.length >= 1
      ? commentss
          .map(
            (commentItem) =>
              `<p>${commentItem.creation_date} ${commentItem.username}: ${commentItem.comment} </p>`
          )
          .join('')
      : '<p>No Comments</p>'
  }
  </div>
  <div class = 'input'>
    <h2>Add a Comment</h2>
    <input type='text' class='username' placeholder='Your name'>
    <input type='text' id='com-text' placeholder='Comments'>
    <br>
    <button type='submit' id='addC-button'>Comment<button>
  </div>
  `;
  popUpObject.classList.add('active');
  overlay.classList.add('active');
  const cancel = document.querySelector('.cancel-pup-up');
  cancel.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
  const submit = document.getElementById('addC-button');
  const name = document.querySelector('.username');
  const comm = document.getElementById('com-text');

  submit.addEventListener('click', async () => {
    // eslint-disable-line
    const nameValue = name.value;
    const commentValue = comm.value;
    await addComment(id, nameValue, commentValue);
    name.value = '';
    comm.value = '';
  });
};

export default commentPopUp;

// Comment Counter
export const countComment = async (inp) => {
  const data = await getComment(inp);
  const count = data.length; // eslint-disable-line
  return count;
};
