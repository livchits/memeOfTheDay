function memeRestructuring(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

fetch('https://api.imgflip.com/get_memes')
  .then(response => {
    response.status === 200
      ? console.log('Successful request!')
      : console.error(`Oops, we get an error ${response.satus}`);
    return response;
  })
  .then(data => data.json())
  .then(json => json.data.memes.map(meme => memeRestructuring(meme)))
  .catch(error => console.error(error.message));
