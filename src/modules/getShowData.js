const BASE_URL = 'https://api.tvmaze.com/shows';

// fetch a single show by id
const getShowData = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}/${id}`);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getShowData;
