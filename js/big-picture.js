import { createCommentItems, clearCommentsList } from './util.js';
import { COMMENTS_UPLOAD_NUMBER, photos } from './data.js';

const createBigPicture = (target) => {

  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImgContainer = bigPicture.querySelector('.big-picture__img');

  const bigPictureImg = bigPictureImgContainer.querySelector('img');
  const likes = bigPicture.querySelector('.likes-count');

  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const firstCommentsCount = document.querySelector('.first-comments-count');


  bigPictureImg.src = target.querySelector('.picture__img').src;
  likes.textContent = target.querySelector('.picture__likes').textContent;

  commentsCount.textContent = target.querySelector('.picture__comments').textContent;

  commentsLoader.classList.remove('hidden');
  clearCommentsList(); //очищаем список комментариев


  //по атрибуту dataset ноды "a" нахожу соответствующий объект в массиве photos
  const targetID = target.dataset.id;
  const currentComments = photos[targetID - 1].comments;

  //объект, содержащий метод для получения части комментариев и подсчета их количества
  const partOfComments = {
    start: 0,
    end: COMMENTS_UPLOAD_NUMBER,
    commentsNumber: 0,
    getPartOfComments: function(comments){
      if (comments.length) {
        const commentsPart = comments.slice(this.start, this.end);
        this.start = this.end;
        this.end += COMMENTS_UPLOAD_NUMBER;
        this.commentsNumber += commentsPart.length;
        return commentsPart;
      }
      return [];
    },
    getCommentsNumber: function(){
      return this.commentsNumber;
    },
  };

  //функция проверки наличия незагруженных комментариев
  const isAnyComments = () => !currentComments.length || currentComments.length === partOfComments.getCommentsNumber();

  //передаю текущий массив comments в функцию для создания первых комментариев к фото
  createCommentItems(partOfComments.getPartOfComments(currentComments));
  firstCommentsCount.textContent = partOfComments.getCommentsNumber();

  //обработчик события 'click' для загрузки следующих комментариев
  commentsLoader.addEventListener('click', () => {
    createCommentItems(partOfComments.getPartOfComments(currentComments));
    firstCommentsCount.textContent = partOfComments.getCommentsNumber();
    if(isAnyComments()) {
      commentsLoader.classList.add('hidden');
    }
  });

  if(isAnyComments()) {
    commentsLoader.classList.add('hidden');
  }

  const description = bigPicture.querySelector('.social__caption');
  description.textContent = photos[targetID - 1].description;
};

export {createBigPicture};
