export function getMemes(URL) {
  return fetch(URL)
    .then(response => {
      response.status === 200
        ? console.log('Successful request!')
        : console.error(`Oops, we get an error ${response.satus}`);
      return response;
    })
    .then(data => data.json())
    .then(json => json.data.memes)
    .catch(error => console.error(error.message));
}
