import enFlag from '../../img/en_icon.png';
import ruFlag from '../../img/ru_icon.png';
import { compareWords } from './compareWords';

export function changeFlag () {
  const languageImg = document.querySelector('.language__image');
  if(localStorage.getItem('language-madknight') === 'ru') {
    languageImg.setAttribute('src', enFlag);
    localStorage.setItem('language-madknight', 'en');
    compareWords ();
  } else if(localStorage.getItem('language-madknight') === 'en') {
    languageImg.setAttribute('src', ruFlag);
    localStorage.setItem('language-madknight', 'ru');
    compareWords ();
  }
}