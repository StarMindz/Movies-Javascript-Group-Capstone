const BASE_URL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  try {
    const result = await fetch(BASE_URL);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The pitition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getShows };