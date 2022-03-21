import {createBigPicture} from './big-picture.js';
import {isEscapeKey} from './util.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');

const body = document.querySelector('body');

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const onPictureEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const openPicture = () => {
  pictures.addEventListener('click', (evt) => {
    const target = evt.target.closest('.picture');
    createBigPicture(target);
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  });
  document.addEventListener('keydown', onPictureEscKeydown);
};

const closePicture = () => {
  closeBtn.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPictureEscKeydown);
  });
};

export {openPicture, closePicture};
