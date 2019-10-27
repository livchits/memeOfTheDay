import { getMemes, ENDPOINT } from './api.js';

function getMemesData(memes) {
  const memesData = memes.map(memeRestructuring);
  return memesData;
}

function memeRestructuring(meme) {
  const { id, name, width, height, url } = meme;
  return { id, name, width, height, url };
}

function biggerThan({ height, width }, size) {
  return height >= size || width >= size;
}

function byAscendingId(firstMeme, nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

function getMemeOfTheDay(memes) {
  const todayDate = new Date().getDate();
  return memes[todayDate - 1];
}

function getRandomMeme(memes) {
  const randomIndex = Math.floor(Math.random() * memes.length);
  const randomMeme = memes[randomIndex];
  return randomMeme;
}

const img = document.querySelector('.meme');
const h1 = document.querySelector('h1');
const randomButton = document.querySelector('.btn-get-random-meme');

getMemes(ENDPOINT)
  .then(getMemesData)
  .then(memes => memes.filter(biggerThan))
  .then(filteredMemes => filteredMemes.sort(byAscendingId))
  .then(sortedMemes => {
    console.dir(sortedMemes);
    return sortedMemes;
  })
  .then(sortedMemes => {
    const todayMeme = getMemeOfTheDay(sortedMemes);
    img.src = todayMeme.url;
    img.alt = todayMeme.name;
  });

randomButton.addEventListener('click', () => {
  h1.textContent = 'Random Meme';
  randomButton.textContent = 'Get another random Meme!';
  getMemes(ENDPOINT).then(memes => {
    const randomMeme = getRandomMeme(memes);
    img.src = randomMeme.url;
    img.alt = randomMeme.name;
  });
});
