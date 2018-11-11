const getMoviesService = async (query) => {
  try {
    const resp = await fetch(`https://swapi.co/api/films/?search=${query}&formate=json`, {
      method: "GET",
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export default getMoviesService