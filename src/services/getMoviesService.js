import apiUrl from '../../config';

const getMoviesService = async (query) => {
  try {
    const resp = await fetch(`${apiUrl}/api/movies?query=${query}`, {
      method: "GET",
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export default getMoviesService