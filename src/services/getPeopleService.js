const getPeopleService = async (query) => {
  try {
    const resp = await fetch(`https://swapi.co/api/people/?search=${query}&format=json`, {
      method: "GET",
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export default getPeopleService