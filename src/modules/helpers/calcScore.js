export function calcScore (dotArray, index) {
  let scoreText = document.querySelector('.score__number');
  let mistakes = 0;
  if (dotArray[index].getAttribute('data-color') === '#ffae00') {
    dotArray.forEach(dot => {
      if (dot.getAttribute('data-color') === 'red') {
        mistakes++;
      }
    });
    scoreText.textContent = Number(scoreText.textContent) + 5 - mistakes;
  }  
}
