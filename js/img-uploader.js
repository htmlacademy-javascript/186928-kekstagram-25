import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgEditor = document.querySelector('.img-upload__overlay');

const imgPreviewContainer = document.querySelector('.img-upload__preview');
const imgPreview = imgPreviewContainer.querySelector('img');

const imgUploader = document.querySelector('.img-upload__input');

const uploadCancelBtn = document.querySelector('.img-upload__cancel');

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
}

function closePreviewImg() {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadForm.reset();
  document.removeEventListener('keydown', onPreviewImgEscKeydown);
}

const createImgUploaderListeners = () => {
  imgUploader.addEventListener('change', () => {
    imgPreview.src = URL.createObjectURL(imgUploader.files[0]);
    openPreviewImg();
  });

  uploadCancelBtn.addEventListener('click', () => {
    closePreviewImg();
  });
};

export {createImgUploaderListeners, onPreviewImgEscKeydown};

