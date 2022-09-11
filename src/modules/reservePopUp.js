import { getShows } from './tvmazeApi.js';
import getShowData from './getShowData.js';
import { getReservation, addReservation } from './reserveInvolvementApi.js';

const reservePopUp = async (id) => {
  const shows = await getShowData(id);
  const reservations = await getReservation(id);
  const popUpObject = document.querySelector('.reservations');
  const overlay = document.getElementById('overlay');

  popUpObject.innerHTML = `
  <p id='cancel-pup-up'>&times;</p>
  <img class='reserve-img' src='${shows.image.medium}'>
  <div class="reserve-info">
    <h2>Movie Infos</h2>
    <p class="reserve-title">Name: ${shows.name}</p>
    <p class="reserve-stat">Length: ${shows.averageRuntime} hours</p>
    <p class="reserve-stat">Premiered: ${shows.premiered}</p>
    <p class="reserve-stat">Ended: ${shows.ended ? shows.ended : 'still showing'}</p>
    <p class="reserve-stat">Language: ${shows.language}</p>
    <p class="reserve-stat">Ratings: ${shows.rating.average ? shows.rating.average : 'not available'}</p>
  </div>
  <div class='reservation-list'>
  <h2>Reservations</h2>
  ${reservations.length >= 1
    ? reservations.map((reserveItem) => `<p>${reserveItem.date_start} to ${reserveItem.date_end} by ${reserveItem.username}</p>`).join('')
    : '<p>No Reservations</p>'}
  </div>
  <div class = 'input'>
    <h2>Add a reservation</h2>
    <input type="text" id='username' placeholder="Your name">
    <input type="text" id='start-date' placeholder="Start Date">
    <input type="text" id='end-date' placeholder="End Date">
    <br>
    <button type='submit' id='add-button'>Reserve<button>
  </div>
  `;
  popUpObject.classList.add('active');
  overlay.classList.add('active');
  const cancel = document.querySelector('#cancel-pup-up');
  cancel.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
  const submit = document.getElementById('add-button');
  const name = document.getElementById('username');
  const start = document.getElementById('start-date');
  const end = document.getElementById('end-date');

  submit.addEventListener('click', async (e) => {
    const nameValue = name.value;
    const startValue = start.value;
    const endValue = end.value;
    await addReservation(id, nameValue, startValue, endValue);
    name.value = '';
    start.value = '';
    end.value = '';
  });
};

export default reservePopUp;