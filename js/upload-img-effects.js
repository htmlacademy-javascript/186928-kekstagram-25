import { imgPreview } from './img-uploader.js';

const effects = document.querySelector('.effects__list');

function addEffect(evt) {
  const target = evt.target.closest('.effects__radio');
  if(target) {
    imgPreview.className = '';
    imgPreview.classList.add(`effects__preview--${target.value}`);
  }
  console.log(imgPreview.classList);
}

effects.addEventListener('click', addEffect);
