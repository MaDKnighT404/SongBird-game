import birdQuestion from '../../img/secret_bird.png';
import { compareWords } from '../helpers/compareWords';
export function createQuestionBox() {
  const container = document.querySelector('.container');
    container.innerHTML =  
    `
    <h2 class="container__bird-name">* * * * * *</h2>
    <div class="sound-box container__sound-box">
      <div class="sound-box__playback-btn"></div>
      <div class="progress sound-box__progress">
        <progress class="progress__timebar" max="100" value="0"> </progress>
        <div class="progress__slider"></div>
        <div class="time-wrapper progress__time">
          <div class="current-time time-wrapper__current-time"> <span class="current-time__minutes">00</span>:<span class="current-time__seconds">00</span></div>
          <div class="duration-time time-wrapper__duration-time"> <span class="duration-time__minutes">00</span>:<span class="duration-time__seconds">00</span></div>
        </div>
      </div>
      <div class="sound-box__volume-image"></div>
      <input class="sound-box__volume" type="range" min="0" max="100">
    </div>
    `;
  const birdQuestionImage = document.querySelector('.bird-question__image');
  const birdQuestionName = document.querySelector('.container__bird-name');
  birdQuestionImage.setAttribute('src', birdQuestion);
  birdQuestionName.textContent = '* * * * * *';
  compareWords ();
}


