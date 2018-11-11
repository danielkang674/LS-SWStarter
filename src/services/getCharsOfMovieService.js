const getCharsOfMovieService = (charsArr) => {
  const arr = charsArr.map(charLink => {
    return fetch(`${charLink}?format=json`)
      .then(data => {
        return data.json();
      })
      .then(data2 => {
        return data2;
      })
  })
  return Promise.all(arr).then(vals => vals).catch(console.log);
};

export default getCharsOfMovieService;