import { isEscapeKey } from './util.js';
import { createScaleControlListeners, removeScaleControlListeners, resetScaleValue } from './scale-listeners.js';
import { setFilters, resetUploadImgValues } from './upload-img-effects.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgEditor = document.querySelector('.img-upload__overlay');

const imgPreviewContainer = document.querySelector('.img-upload__preview');
const imgPreview = imgPreviewContainer.querySelector('img');

const imgUploader = document.querySelector('.img-upload__input');

const uploadCancelBtn = document.querySelector('.img-upload__cancel');

const resetUploadImgAll = () => {
  imgUploadForm.reset();
  resetUploadImgValues();
  resetScaleValue();
};

const onPreviewImgEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closePreviewImg();
  }
};

function openPreviewImg() {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPreviewImgEscKeydown);
  createScaleControlListeners();
  setFilters();
}

function closePreviewImg() {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  removeScaleControlListeners();
  resetUploadImgAll();
  document.removeEventListener('keydown', onPreviewImgEscKeydown);
}

const createImgUploaderListeners = () => {

  imgUploader.addEventListener('change', (evt) => {
    imgPreview.src = URL.createObjectURL(evt.target.files[0]); // передаю URL своего изображения при помощи статического метода URL.createObjectURL()
    openPreviewImg();
  });

  uploadCancelBtn.addEventListener('click', () => {
    closePreviewImg();
  });

};

export {createImgUploaderListeners, onPreviewImgEscKeydown, imgPreview, closePreviewImg};

