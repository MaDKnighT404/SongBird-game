import { dictionary } from '../dictionary'

export function compareWords () {
  let language = localStorage.getItem('language-madknight') 
  for (let key in dictionary) {
    let elements = document.querySelectorAll(`[data-lang= "${key}"]`);
    elements.forEach(element => {
      if (element) {
        element.textContent = dictionary[key][language];
        }
    });
  }

  for (let key in dictionary) {
    let elements = document.querySelectorAll(`[data-lang2= "${key}"]`);
    elements.forEach(element => {
      if (element) {
        element.textContent = dictionary[key][language];
        }
    });
  }
}
