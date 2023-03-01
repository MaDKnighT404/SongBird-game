import { birdsData } from '../birds';
import { birdsDataEn } from'../birdsEn';

import {addSound} from '../helpers/addSound';

export function createGalleryItem (i, j) {
  const gallery = document.querySelector('.gallery');
  const newItem = document.createElement('div');
  newItem.className = 'bird-container gallery__item';
  newItem.innerHTML = `
  <img class="bird-container__image" src= '${birdsData[i][j].image}' alt="bird">
  <div class="container bird-container__description">
    <h2 class="container__bird-name" data-lang="${birdsDataEn[i][j].name.toLocaleLowerCase()}">${birdsData[i][j].name}</h2>
    <h3 class="container__bird-name">${birdsData[i][j].species}</h3>
    <div class="sound-box container__sound-box">
      <div class="sound-box__playback-btn" data-btn_number="${i} ${j}"></div>
      <div class="progress sound-box__progress">
        <progress class="progress__timebar" max="100" value="0" data-progress_bar="${i} ${j}"> </progress>
        <div class="progress__slider" data-slider="${i} ${j}"></div>
        <div class="time-wrapper progress__time">
          <div class="current-time time-wrapper__current-time"> <span class="current-time__minutes" data-cm="${i} ${j}">00</span>:<span class="current-time__seconds" data-cs="${i} ${j}">00</span></div>
          <div class="duration-time time-wrapper__duration-time"> <span class="duration-time__minutes" data-dm="${i} ${j}">00</span>:<span class="duration-time__seconds" data-ds="${i} ${j}">00</span></div>
        </div>
      </div>
      <div class="sound-box__volume-image" data-volume_img="${i} ${j}"></div>
      <input class="sound-box__volume" type="range" min="0" max="100" data-volume="${i} ${j}">
    </div>
  </div>
  <p class="bird-container__text" data-lang="${birdsDataEn[i][j].name.toLocaleLowerCase()}-text">${birdsData[i][j].description}</p>
  `;
  gallery.append(newItem);

  const playBackBtn = document.querySelector(`[data-btn_number = "${i} ${j}"]`);
  const volumeImg = document.querySelector(`[data-volume_img = "${i} ${j}"]`);
  const timebar = document.querySelector(`[data-progress_bar = "${i} ${j}"]`);
  const slider = document.querySelector(`[data-slider = "${i} ${j}"]`);
  const volumebar = document.querySelector(`[data-volume = "${i} ${j}"]`);
  const currentTimeMinutes = document.querySelector(`[data-cm = "${i} ${j}"]`);
  const currentTimeSeconds = document.querySelector(`[data-cs = "${i} ${j}"]`);
  const durationTimeMinutes = document.querySelector(`[data-dm = "${i} ${j}"]`);
  const durationTimeSeconds = document.querySelector(`[data-ds = "${i} ${j}"]`);


  let music = new Audio(birdsData[i][j].audio);
  addSound (playBackBtn, music, timebar, slider, volumeImg, volumebar, currentTimeMinutes, currentTimeSeconds, durationTimeMinutes, durationTimeSeconds );
}
