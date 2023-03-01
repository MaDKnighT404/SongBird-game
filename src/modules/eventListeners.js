import { showGreeting } from './showGreeting';
import { showGame } from './showGame';
import { showResults } from './showResults';

import { compareWords } from './helpers/compareWords';

import { birdsData } from './birds';
import { birdsDataEn } from './birdsEn';
import { restart } from './helpers/restart';

import { setQuestionBird } from './helpers/setQuestionBird';
import { createDescriptionBlock } from './blocks/createDescriptionBlock';

import { getRandomNumber } from './helpers/getRandomNumber';
import { paintDot } from './helpers/paintDot';
import { playAudio } from './helpers/playAudio';

import { addSound } from './helpers/addSound';

import correctAudio from '../audio/correct_answer.mp3';
import wrongAudio from '../audio/wrong_answer.mp3';



export function addButtonsEventListeners () {
  const menuButtons = document.querySelectorAll('.menu__item');
  const startBtn = document.querySelector('.greeting__btn-start');
  const resultBtn = document.querySelector('.results__button');
  menuButtons[0].onclick = showGreeting;
  resultBtn.onclick = showGame;

  menuButtons[1].onclick = showGame;
  startBtn.onclick = showGame;
}

let randomBirdNumber = getRandomNumber(0, 5);
export function addAnswersEventListeners(blockNumber) {
  let answers = document.querySelectorAll('.answers__item');
  let answersDots = document.querySelectorAll('.answers__dot');
  const birdsDataLevel = birdsData[blockNumber];
  const birdsDataLevelEn = birdsDataEn[blockNumber];
  randomBirdNumber = getRandomNumber(0, 5);
  let rightAnswer = false;
  let newLevel = false;
  const nextQuestionBtn = document.querySelector('.game__button');
  const lastLevel = document.querySelectorAll('.questions__item')[5];


  for (let i = 0; i < answers.length; i++) {
    answers.forEach((answer, index) => {
      if (index === i) {

        answer.addEventListener('click', createDescriptionBlock.bind(null, birdsDataLevel, i, birdsDataLevelEn))
        answer.addEventListener('click', () => {
          
          if (index === randomBirdNumber && rightAnswer === false && newLevel === false) {
            playAudio(correctAudio);
            setQuestionBird (blockNumber, index);
            paintDot(answersDots, index, '#ffae00');
            rightAnswer = true;
            newLevel = true;
            nextQuestionBtn.style.background = 'rgb(68, 164, 43)';
            nextQuestionBtn.addEventListener('click', () => {

              if(blockNumber < 5 && rightAnswer === true && newLevel === true) {
                blockNumber++;
                restart (blockNumber);
                newLevel = false;
                addAnswersEventListeners(blockNumber);
                addSoundEventListeners(blockNumber, randomBirdNumber);
              } 
              if (lastLevel.classList.contains('questions__item_selected')) {
                nextQuestionBtn.setAttribute('data-lang2', 'show-result');
                nextQuestionBtn.textContent = 'Узнать результат';
                nextQuestionBtn.onclick = showResults;
                compareWords();
              }
            });
            compareWords();
          }

          if (index !== randomBirdNumber && rightAnswer === false && newLevel === false) {
            answersDots = document.querySelectorAll('.answers__dot');
            playAudio(wrongAudio);
            paintDot(answersDots, index, 'red');
          }
        });
      }
    });
  }
}

export function addSoundEventListeners(blockNumber, index) {
  index = randomBirdNumber;
  const playBackBtn = document.querySelector('.sound-box__playback-btn');
  const volumeImg = document.querySelector('.sound-box__volume-image ');
  const timebar = document.querySelector('.progress__timebar');
  const slider = document.querySelector('.progress__slider');
  const volumebar = document.querySelector('.sound-box__volume');
  const answers = document.querySelectorAll('.answers__item');
  const answersDots = document.querySelectorAll('.answers__dot');
  const menuButtons = document.querySelectorAll('.menu__item');
  const nextQuestionBtn = document.querySelector('.game__button');
  const currentTimeMinutes = document.querySelector('.current-time__minutes');
  const currentTimeSeconds = document.querySelector('.current-time__seconds');
  const durationTimeMinutes = document.querySelector('.duration-time__minutes');
  const durationTimeSeconds = document.querySelector('.duration-time__seconds');

  let music = new Audio(birdsData[blockNumber][index].audio);

  addSound (playBackBtn, music, timebar, slider, volumeImg, volumebar, currentTimeMinutes, currentTimeSeconds, durationTimeMinutes, durationTimeSeconds);

  // for stop music
  nextQuestionBtn.addEventListener('click', () => {
    if (nextQuestionBtn.style.background == 'rgb(68, 164, 43)'){
      music.pause();
    }
  });
  
  answers.forEach(answer => {
    answer.addEventListener('click', ()=> {
      answersDots.forEach(dot => {
          if (dot.getAttribute('data-color') === '#ffae00') {
            music.pause();
            playBackBtn.classList.remove('sound-box__pause-btn');
          }
      });
    });
  });

  menuButtons[0].addEventListener('click', ()=> {
    music.pause();
  });
} 

