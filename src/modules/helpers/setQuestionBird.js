import { birdsData } from '../birds';
import { birdsDataEn } from '../birdsEn';

import { compareWords } from './compareWords';
export function setQuestionBird (blockNumber,index) {
  const birdPictureQuestion = document.querySelector('.bird-question__image');
  const birdPictureNameQuestion = document.querySelector('.container__bird-name'); 
  const birdsDataLevel = birdsData[blockNumber];
  const birdsDataLevelEn = birdsDataEn[blockNumber];
  birdPictureQuestion.setAttribute('src', birdsDataLevel[index].image);
  birdPictureNameQuestion.setAttribute('data-lang', `${birdsDataLevelEn[index].name.toLocaleLowerCase()}`);
  birdPictureNameQuestion.textContent = birdsDataLevel[index].name;
  compareWords ();
}