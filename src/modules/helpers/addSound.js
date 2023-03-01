import { addZero } from './addZero';

export function addSound (playBtn, sound, timebar, slider, volumeImg, volumebar, currentTimeMinutes, currentTimeSeconds, durationTimeMinutes, durationTimeSeconds) {
  playBtn.addEventListener('click', () => {
    if (playBtn.classList.contains('sound-box__pause-btn')) {
      playBtn.classList.toggle('sound-box__pause-btn');
      sound.pause();
    } else {
      playBtn.classList.toggle('sound-box__pause-btn');
      sound.play();
    }

    sound.addEventListener('timeupdate', ()=> {
      let currentTime = sound.currentTime;
      let durationTime = sound.duration;

      timebar.value = (currentTime / durationTime) * 100;
      slider.style.left = `${((currentTime / durationTime) * 100)}%`;

      currentTimeMinutes.textContent = addZero(Math.floor(Math.round(sound.currentTime) / 60));
      currentTimeSeconds.textContent = addZero(Math.floor(Math.round(sound.currentTime) % 60));
    });

    durationTimeMinutes.textContent = addZero(Math.floor(Math.round(sound.duration) / 60));
    durationTimeSeconds.textContent = addZero(Math.floor(Math.round(sound.duration) % 60));
  });

  timebar.addEventListener('click', (event) => {
    let progressBarWidth = timebar.offsetWidth;
    let currentClick = event.offsetX;
    timebar.value = (currentClick / progressBarWidth) * 100;
    if (!playBtn.classList.contains('sound-box__pause-btn')) {
      playBtn.classList.toggle('sound-box__pause-btn');
    } 
    sound.pause();
    sound.currentTime = sound.duration * (currentClick / progressBarWidth);
    sound.play();
    sound.addEventListener('timeupdate', ()=> {
      let currentTime = sound.currentTime;
      let durationTime = sound.duration;
      timebar.value = (currentTime / durationTime) * 100;
      slider.style.left = `${((currentTime / durationTime) * 100)}%`;
    });
  });

  volumeImg.addEventListener('click', () => {
    if (volumeImg.classList.contains('sound-box__mute-image')) {
      volumeImg.classList.toggle('sound-box__mute-image');
      sound.volume = volumebar.value / 100;
    } else {
      volumeImg.classList.toggle('sound-box__mute-image');
      sound.volume = 0;
      volumebar.value = 0;
      }
  });

  volumebar.addEventListener('input', ()=> {
    sound.volume = volumebar.value / 100;
    if (volumebar.value === '0') {
      volumeImg.classList.add('sound-box__mute-image');
    } else {
      volumeImg.classList.remove('sound-box__mute-image');
    }
  });

}
