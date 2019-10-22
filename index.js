function memeRestructuring(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

function filterBySize(meme) {
  return meme.height >= 500 || meme.width >= 500;
}

function sortById(firstMeme, nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

fetch('https://api.imgflip.com/get_memes')
  .then(response => {
    response.status === 200
      ? console.log('Successful request!')
      : console.error(`Oops, we get an error ${response.satus}`);
    return response;
  })
  .then(data => data.json())
  .then(json => json.data.memes.map(memeRestructuring))
  .then(memes => memes.filter(filterBySize))
  .then(filteredMemes => filteredMemes.sort(sortById))
  .then(sortedMemes => console.dir(sortedMemes))
  .catch(error => console.error(error.message));
