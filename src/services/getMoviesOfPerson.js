const getMoviesOfPerson = (filmArr) => {
  return fetch(`${filmArr}?format=json`)
    .then(data => {
      return data.json();
    })
    .then(data2 => {
      console.log(data2);
      return data2;
    })
    .catch(console.log);
};

export default getMoviesOfPerson;