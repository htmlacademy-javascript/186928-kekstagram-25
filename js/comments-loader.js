import { createCommentItems, clearCommentsList } from './util.js';
import { COMMENTS_UPLOAD_NUMBER } from './data.js';

const loadComments = (currentComments) => {
  const currentCommentsLength = currentComments.length;
  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.classList.remove('hidden');
  const firstCommentsCount = document.querySelector('.first-comments-count');

  clearCommentsList(); //очищаем список комментариев

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
  const isAnyComments = () => currentCommentsLength === partOfComments.getCommentsNumber();

  //передаю текущий массив comments в функцию для создания первых комментариев к фото
  createCommentItems(partOfComments.getPartOfComments(currentComments));
  firstCommentsCount.textContent = partOfComments.getCommentsNumber();
  if(isAnyComments()) {
    commentsLoader.classList.add('hidden');
  }
  else {
    commentsLoader.classList.remove('hidden');
  }

  //обработчик события 'click' для загрузки следующих комментариев
  commentsLoader.addEventListener('click', () => {
    createCommentItems(partOfComments.getPartOfComments(currentComments));
    firstCommentsCount.textContent = partOfComments.getCommentsNumber();
    if(isAnyComments()) {
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
    }
  });
};

export { loadComments };
