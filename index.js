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

function todayDate() {
  const today = new Date();
  const todayDate = today.getDate();
  return todayDate;
}

function getMemeOfTheDay(memes) {
  return memes[todayDate() - 1];
}

function getRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function getRandomMeme(memes) {
  const randomMeme = memes[getRandomIndex(memes)];
  return randomMeme;
}

const img = document.querySelector('.meme');
const h1 = document.querySelector('h1');
const randomButton = document.querySelector('.btn-get-random-meme');

getMemes(ENDPOINT)
  .then(getMemesData)
  .then(filterMemes)
  .then(sortMemes)
  .then(sortedMemes => {
    console.dir(sortedMemes);
    return sortedMemes;
  })
  .then(sortedMemes => {
    const todayMeme = getMemeOfTheDay(sortedMemes);
    img.src = todayMeme.url;
  });

//Seguir desde parte 5.3 (funcionalidad del botón)
//También faltan agregar estilos
