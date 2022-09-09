// Import Elements
import { getComments, postComments } from './comments.js';
import movies, { commentPopup } from './elements.js';

// Event Listener Function for Comment Button
movies.addEventListener('click', (e) => {
  if (e.target.classList.contains('commentBtn-1')) {
    e.target.classList.add('test');
    const target = e.target; // eslint-disable-line
    commentPopup.innerHTML = `<div class="c-popup">
                                <p class="x">x</p>
                                <img src="" alt="" class="poster">
                                <div class="bio"></div>
                                <h2 class="comm-1">Comments</h2>
                                <div class="comm"></div>
                                <h2 class="add-com">Add Comments</h2>
                                <input type="text" name="name" class="un" placeholder="Enter Your Name">
                                <input type="text" name="comments" class="uc" placeholder="Write Comments">
                                <button class="submit">Comment</button>
                                </div>`
  }
});

/// Event Listener for Comment Section Button
commentPopup.addEventListener('click', (e) => {
  if (e.target.classList.contains('submit')) {
    // Get Index of comment button
    const buttons = document.getElementsByClassName('commentBtn-1');
    const list = [];
    for (let i = 0; i < buttons.length; i += 1) {
      list.push(buttons[i].className);
    }
    const index = list.indexOf('commentBtn-1 test');
    // Get data from input fields
    const userName = document.querySelector('.un');
    const userComment = document.querySelector('.uc');
    // Send Comments to API
    postComments(userName.value, userComment.value, index);
    // Recieve Comments from API
    getComments(index);
  }
});

// Show comments on page load
movies.addEventListener('click', (m) => {
  if (m.target.classList.contains('commentBtn-1')) {
    m.target.classList.add('maybe');
    const btns = movies.getElementsByClassName('commentBtn-1');
    const lis = [];
    for (let i = 0; i < btns.length; i += 1) {
      lis.push(btns[i].className);
    }
    const ind = lis.indexOf('commentBtn-1 maybe');
    // console.log(ind);
    // Get Comments
    getComments(ind);
  }
});
