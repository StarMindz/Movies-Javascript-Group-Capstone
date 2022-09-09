const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getReservation = async () => {
  try {
    const result = await fetch(`${BASE_URL}${GAME_ID}/reservations`);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The pitition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

const addReservation = async (id, name, start, end) => {
  const body = JSON.stringify({
    item_id: id,
    username: name,
    start_date: start,
    end_date: end,
});

  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/likes`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};

export { addReservation, getReservation };
