import { restart } from './helpers/restart';
import { compareWords } from './helpers/compareWords';

export function showGreeting() {
  const menuButtons = document.querySelectorAll('.menu__item');
  const greetingContainer = document.querySelector('.greeting');
  const gameContainer = document.querySelector('.game');
  const resultsContainer = document.querySelector('.results'); 
  const mainForest = document.querySelector('.main__forest');
  const mainBird = document.querySelector('.main__bird');

  mainForest.classList.remove('main__forest_hide');
  mainBird.classList.add('main__bird_hide');

  greetingContainer.classList.remove('greeting_hide');
  gameContainer.classList.add('game_hide');
  gameContainer.classList.remove('game_hide2');
  resultsContainer.classList.add('results_hide');

  menuButtons[0].classList.add('menu__item_selected');
  menuButtons[1].classList.remove('menu__item_selected');

  restart(0);
  compareWords ();
}







