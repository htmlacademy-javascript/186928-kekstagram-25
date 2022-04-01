import { photos } from './data.js';
import { loadComments } from './comments-loader.js';

const createBigPicture = (target) => {

  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImgContainer = bigPicture.querySelector('.big-picture__img');

  const bigPictureImg = bigPictureImgContainer.querySelector('img');
  const likes = bigPicture.querySelector('.likes-count');

  const commentsCount = bigPicture.querySelector('.comments-count');

  bigPictureImg.src = target.querySelector('.picture__img').src;
  likes.textContent = target.querySelector('.picture__likes').textContent;

  commentsCount.textContent = target.querySelector('.picture__comments').textContent;

  //по атрибуту dataset ноды "a" находим соответствующий объект в массиве photos
  const targetID = target.dataset.id;
  const currentComments = photos[targetID - 1].comments;

  loadComments(currentComments); //загружаем комментарии

  const description = bigPicture.querySelector('.social__caption');
  description.textContent = photos[targetID - 1].description;
};

export { createBigPicture };
