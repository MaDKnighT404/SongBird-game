import { calcScore } from './calcScore';

export function paintDot (dotArray, index, color) {
  dotArray[index].style.background = color;
  dotArray[index].style.border = 'none';
  dotArray[index].setAttribute('data-color', color);
  calcScore (dotArray, index);
}
