import { birdsData } from '../birds';
import { birdsDataEn } from '../birdsEn';
import { createQuestionBox } from '../blocks/createQuestionBox';
import { compareWords } from './compareWords';

export function restart (blockNumber) {
  const birdsDescriptionContainer = document.querySelector('.bird-description');
  const nextQuestionBtn = document.querySelector('.game__button');
  let answers = document.querySelectorAll('.answers__item');
  let scoreText = document.querySelector('.score__number');
  const answersBlock = document.querySelector('.answers');
  const questions = document.querySelectorAll('.questions__item');

  questions.forEach(question => {
    question.classList.remove('questions__item_selected');
  });
  questions[blockNumber].classList.add('questions__item_selected');
  if (blockNumber === 0) {
    scoreText.textContent = 0;
  }

  createQuestionBox();

  birdsDescriptionContainer.innerHTML = `
    <div class="bird-description__task" data-lang="description-task">
      Прослушайте запись пения неизвестной птицы, после чего попытайтесь угадать её название из списка. 
    </div>
    `;

  answers.forEach (answer => {
    answer.remove();
  });

  for (let i = 0; i < 6; i++) {
    const newAnswer = document.createElement('li');
    newAnswer.classList.add('answers__item');
    answersBlock.append(newAnswer);
  }
  answers = document.querySelectorAll('.answers__item');

  for (let i = 0; i < answers.length; i++) {
    answers.forEach( answer => {
      answer.innerHTML = `<span class="answers__dot"></span><span data-lang="${birdsDataEn[blockNumber][i].name.toLocaleLowerCase()}">${birdsData[blockNumber][i].name}</span>`;
      i++;
    });
  }

  nextQuestionBtn.style.background = 'rgba(6, 127, 28, 0.5)';
  nextQuestionBtn.textContent = 'Следующий вопрос';
  nextQuestionBtn.onclick = null;
  compareWords();
}
