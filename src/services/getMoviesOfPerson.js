const getMoviesOfPerson = (filmArr) => {
  const arr = filmArr.map(movLink => {
    return fetch(`${movLink}?format=json`)
      .then(data => {
        return data.json();
      })
      .then(data2 => {
        return data2;
      })
  });
  return Promise.all(arr).then(vals => vals).catch(console.log);
};

export default getMoviesOfPerson;