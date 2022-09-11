const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getLikesHome = async () => {
  try {
    const result = await fetch(`${BASE_URL}${GAME_ID}/likes`);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The pitition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

const addLike = async (id) => {
  const body = JSON.stringify({ item_id: id });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/likes`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};

export { addLike, getLikesHome };
