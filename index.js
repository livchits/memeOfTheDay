import { getMemes, ENDPOINT } from './api.js';

function getMemesData(memes) {
  const memesData = memes.map(memeRestructuring);
  return memesData;
}

function memeRestructuring(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

function filterBySize(meme) {
  return meme.height >= 500 || meme.width >= 500;
}

function filterMemes(memes) {
  const filteredMemes = memes.filter(filterBySize);
  return filteredMemes;
}

function sortById(firstMeme, nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

function sortMemes(memes) {
  return memes.sort(sortById);
}

fetch('https://api.imgflip.com/get_memes')
  .then(response => {
    response.status === 200
      ? console.log('Successful request!')
      : console.error(`Oops, we get an error ${response.satus}`);
    return response;
  })
  .then(data => data.json())
  .then(json => json.data.memes)
  .then(getMemesData)
  .then(filterMemes)
  .then(sortMemes)
  .then(sortedMemes => console.dir(sortedMemes))
  .catch(error => console.error(error.message));
