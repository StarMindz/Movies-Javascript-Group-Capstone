// Post Comments to API
export const postComments = async (a, b,c) => {
   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/comments';
  const id = 'item' + c
   fetch(url, {
     method: 'POST',
     body: JSON.stringify({
       item_id: id,
       username: a,
       comment: b,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   }).then((reply) => reply.json()).then((val) => console.log(val));
 };

// Retrieve Comments from API
export const getComments = async (c) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/comments?item_id=item' + c;
   const recieve = await fetch(url);
   const data = await recieve.json();
   console.log(data);
   commPop(data);
 };

// Populate DOM with comments
const commPop =(arg) => {
  const list = document.querySelector('.comm');
  console.log(list);
  for (let i = 0; i < arg.length; i += 1) {
    list.innerHTML += `<p class="indi-comment">${arg[i].creation_date}</p>
                       <p class="indi-comment">${arg[i].comment}</p>
                       <p class="indi-comment">${arg[i].username}</p>`
  }
}
