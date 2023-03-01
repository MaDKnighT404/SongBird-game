import { compareWords } from './helpers/compareWords';
export function showResults () {
  const gameContainer = document.querySelector('.game');
  const resultsContainer = document.querySelector('.results'); 
  const gameScore = document.querySelector('.score__number');
  let resultScore = document.querySelector('.text__score');
  const mainBird = document.querySelector('.main__bird');
  const menuButtons = document.querySelectorAll('.menu__item');

  let resultText = document.querySelector('.text__message');
  const score = document.querySelector('.score__number');
  mainBird.classList.remove('main__bird_hide');
  menuButtons[1].classList.remove('menu__item_selected');
  resultsContainer.style.transition = '0.6s ease-in-out';
  resultScore.textContent = gameScore.textContent;
  gameContainer.classList.add('game_hide2');
  resultsContainer.classList.remove('results_hide');

  if (score.textContent == 30) {
    resultText.innerHTML = '<span data-lang="result-text-1w">Вы правильно ответили на все вопросы и заработали максимальный балл!</span> <span class="text__score"></span> <span data-lang="result-text-2w">из 30!!!</span>';
    resultScore = document.querySelector('.text__score');
    resultScore.textContent = gameScore.textContent;
  } else {
    resultText.innerHTML = '<span data-lang="result-text-1l">Вы прошли викторину и набрали </span> <span class="text__score"></span> <span data-lang="result-text-2l">из 30 возможных баллов!</span></div>';
    resultScore = document.querySelector('.text__score');
    resultScore.textContent = gameScore.textContent;
  }
  compareWords ();
}
