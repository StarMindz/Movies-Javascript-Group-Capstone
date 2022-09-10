const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getComment = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}${GAME_ID}/comments?item_id=${id}`);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The petition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
}

const addComment = async (id, name, start) => {
  const body = JSON.stringify({
    item_id: id,
    username: name,
    comment: start,
});

  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/comments`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};

export { addComment, getComment };
