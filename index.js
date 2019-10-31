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

function showMemeOfTheDay() {
  const todayMeme = getMemeOfTheDay(memesArray);
  img.src = todayMeme.url;
  img.alt = todayMeme.name;
  memeText.textContent = todayMeme.name;
}

function getRandomMeme(memes) {
  const randomIndex = Math.floor(Math.random() * memes.length);
  const randomMeme = memes[randomIndex];
  return randomMeme;
}

function showRandomMeme() {
  h1.textContent = 'Random Meme';
  randomButton.textContent = 'Get another random Meme!';
  const randomMeme = getRandomMeme(memesArray);
  img.src = randomMeme.url;
  img.alt = randomMeme.name;
  memeText.textContent = randomMeme.name;
}

const img = document.querySelector('.meme');
const h1 = document.querySelector('h1');
const randomButton = document.querySelector('.btn-get-random-meme');
const memeText = document.querySelector(".meme-text");
let memesArray;

getMemes(ENDPOINT)
  .then(getMemesData)
  .then(memes => memes.filter(meme => biggerThan(meme, 500)))
  .then(filteredMemes => filteredMemes.sort(byAscendingId))
  .then(sortedMemes => {
    console.dir(sortedMemes);
    memesArray = sortedMemes;
    showMemeOfTheDay();
  });

randomButton.addEventListener('click', showRandomMeme);
