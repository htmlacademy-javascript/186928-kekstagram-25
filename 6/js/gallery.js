import {createBigPicture} from './big-picture.js';
import {isEscapeKey} from './util.js';

const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');

const body = document.querySelector('body');

const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
commentsCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onPictureEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture() {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPictureEscKeydown);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
}

const createPictureListeners = () => {
  pictures.addEventListener('click', (evt) => {
    const target = evt.target.closest('.picture');
    createBigPicture(target);
    openBigPicture();
  });

  closeBtn.addEventListener('click', () => {
    closeBigPicture();
  });
};

export {createPictureListeners};
