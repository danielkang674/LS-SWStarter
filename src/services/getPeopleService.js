import apiUrl from '../../config';

const getPeopleService = async (query) => {
  try {
    const resp = await fetch(`${apiUrl}/api/people?query=${query}`, {
      method: "GET",
    });
    return resp.json();
  } catch (err) {
    console.log(err);
  }
};

export default getPeopleService