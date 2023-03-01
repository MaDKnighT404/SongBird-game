import { addAnswersEventListeners, addSoundEventListeners } from './eventListeners';
import { restart } from './helpers/restart';
import { compareWords } from './helpers/compareWords';

export function showGame () {
  const greetingContainer = document.querySelector('.greeting');
  const gameContainer = document.querySelector('.game');
  const menuButtons = document.querySelectorAll('.menu__item');
  const mainForest = document.querySelector('.main__forest');
  const mainBird = document.querySelector('.main__bird');
  const resultsContainer = document.querySelector('.results'); 
  
  greetingContainer.classList.add('greeting_hide');
  resultsContainer.classList.add('results_hide');
  gameContainer.classList.remove('game_hide');
  gameContainer.classList.remove('game_hide2');
  gameContainer.style.transition = '0.6s ease-in-out';

  mainForest.classList.add('main__forest_hide');
  mainBird.classList.add('main__bird_hide');

  menuButtons[0].classList.remove('menu__item_selected');
  menuButtons[1].classList.add('menu__item_selected');

  restart(0);
  addAnswersEventListeners(0);
  addSoundEventListeners(0);
  compareWords ();
}