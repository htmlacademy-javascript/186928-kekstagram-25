import { SCALE_STEP, PHOTO_ZOOM_MAX_VALUE, PHOTO_ZOOM_MIN_VALUE, SCALE_START_VALUE } from './data.js';
import { imgPreview } from './img-uploader.js';

const PROCENT_SYMBOL = '%';
const scaleBlock = document.querySelector('.img-upload__scale');
const scaleControl = document.querySelector('.scale__control--value');

const scaleFunc = (evt) => {
  const target = evt.target;
  const zoomOut = target.closest('.scale__control--smaller');
  const zoomIn = target.closest('.scale__control--bigger');

  let scaleNumber;

  if(zoomOut) {
    scaleNumber = parseInt(scaleControl.value, 10) - SCALE_STEP;
    if(scaleNumber < PHOTO_ZOOM_MIN_VALUE) {
      scaleNumber = PHOTO_ZOOM_MIN_VALUE;
    }
    scaleControl.value = scaleNumber.toString() + PROCENT_SYMBOL;
  }

  if(zoomIn) {
    scaleNumber = parseInt(scaleControl.value, 10) + SCALE_STEP;
    zoomIn.disabled = false;
    if(scaleNumber > PHOTO_ZOOM_MAX_VALUE) {
      scaleNumber = PHOTO_ZOOM_MAX_VALUE;
    }
    scaleControl.value = scaleNumber.toString() + PROCENT_SYMBOL;
  }

  imgPreview.style.transform = `scale(${(parseInt(scaleControl.value, 10))/100})`;
};

const createScaleControlListeners = () => {
  scaleBlock.addEventListener('click', scaleFunc);
};

const removeScaleControlListeners = () => {
  scaleBlock.removeEventListener('click', scaleFunc);
};

const resetScaleValue = () => {
  scaleControl.value = SCALE_START_VALUE.toString() + PROCENT_SYMBOL;
  imgPreview.style.transform = `scale(${(parseInt(scaleControl.value, 10))/100})`;
};

export { createScaleControlListeners, removeScaleControlListeners, resetScaleValue };
