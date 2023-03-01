import { addSound } from '../helpers/addSound';
import { compareWords } from '../helpers/compareWords';

export function createDescriptionBlock (birdsDataLevel, index, birdsDataLevelEn) {
  const birdsDescriptionContainer = document.querySelector('.bird-description');
  birdsDescriptionContainer.innerHTML = `
  <img class="bird-description__image" src=${birdsDataLevel[index].image} alt="bird">
  <div class="container bird-description__container">
    <h2 class="container__bird-name" data-lang="${birdsDataLevelEn[index].name.toLocaleLowerCase()}">${birdsDataLevel[index].name}</h2>
    <h3 class="container__bird-name">${birdsDataLevel[index].species}</h3>
    <div class="sound-box container__sound-box">
      <div class="sound-box__playback-btn"></div>
      <div class="progress sound-box__progress">
        <progress class="progress__timebar" max="100" value="0"></progress>
        <div class="progress__slider"></div>
        <div class="time-wrapper progress__time">
          <div class="current-time time-wrapper__current-time"> <span class="current-time__minutes">00</span>:<span class="current-time__seconds">00</span></div>
          <div class="duration-time time-wrapper__duration-time"> <span class="duration-time__minutes">00</span>:<span class="duration-time__seconds">00</span></div>
        </div>
      </div>
      <div class="sound-box__volume-image"></div>
      <input class="sound-box__volume" type="range" min="0" max="100">
    </div>
  </div>
  <p class="bird-description__text" data-lang="${birdsDataLevelEn[index].name.toLocaleLowerCase()}-text">${birdsDataLevel[index].description}</p>
  `;

  const playBackBtn = document.querySelector('.bird-description__container .sound-box__playback-btn');
  const timebar = document.querySelector('.bird-description__container .sound-box .progress__timebar');
  const slider = document.querySelector('.bird-description__container .sound-box .progress__slider');
  let music = new Audio(birdsDataLevel[index].audio);
  const volumebar = document.querySelector('.bird-description__container .sound-box__volume');
  const volumeImg = document.querySelector('.bird-description__container .sound-box__volume-image');
  const answers = document.querySelectorAll('.answers__item');
  const menuButtons = document.querySelectorAll('.menu__item');
  const nextQuestionBtn = document.querySelector('.game__button');
  const currentTimeMinutes = document.querySelector('.bird-description__container .current-time__minutes');
  const currentTimeSeconds = document.querySelector('.bird-description__container .current-time__seconds');
  const durationTimeMinutes = document.querySelector('.bird-description__container .duration-time__minutes');
  const durationTimeSeconds = document.querySelector('.bird-description__container .duration-time__seconds');

  addSound (playBackBtn, music, timebar, slider, volumeImg, volumebar, currentTimeMinutes, currentTimeSeconds, durationTimeMinutes, durationTimeSeconds);

  //for stop music
  nextQuestionBtn.addEventListener('click', () => {
    if (nextQuestionBtn.style.background == 'rgb(68, 164, 43)'){
      music.pause();
    }
  });

  answers.forEach(answer => {
    answer.addEventListener('click', ()=> {
      music.pause();
    });
  });

  menuButtons[0].addEventListener('click', ()=> {
    music.pause();
  });

  compareWords ();
}
