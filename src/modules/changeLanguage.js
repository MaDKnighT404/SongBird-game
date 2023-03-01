import enFlag from '../img/en_icon.png';
import ruFlag from '../img/ru_icon.png';
import { changeFlag } from './helpers/changeFlag';
import { compareWords } from './helpers/compareWords';

export function changeLanguage () {
  const languageImg = document.querySelector('.language__image');
  let language;

  localStorage.getItem('language-madknight') ? undefined : localStorage.setItem('language-madknight', 'ru');
  language = localStorage.getItem('language-madknight');

  if(localStorage.getItem('language-madknight') === 'ru') {
    languageImg.setAttribute('src', ruFlag);
  } else if(localStorage.getItem('language-madknight') === 'en') {
    languageImg.setAttribute('src', enFlag);
  }
  
  languageImg.onclick = changeFlag;

  compareWords ();
}

