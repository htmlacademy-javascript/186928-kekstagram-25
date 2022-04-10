import { loadComments } from './comments-loader.js';
import { originalPhotos } from './util.js';

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
  const currentComments = originalPhotos[targetID].comments;

  loadComments(currentComments); //загружаем комментарии

  const description = bigPicture.querySelector('.social__caption');
  description.textContent = originalPhotos[targetID].description;
};

export { createBigPicture };
