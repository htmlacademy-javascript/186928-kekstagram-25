import { names, messages, OBJECTS_NUMBER, COMMENTS_MAX_NUMBER, LIKES_MIN, LIKES_MAX, AVATAR_MIN, AVATAR_MAX } from './data.js';
import { getRandomInt, getRandomElement } from './util.js';

const createComment = function(index){
  return {
    id: index,
    avatar: `img/avatar-${getRandomInt(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: getRandomElement(messages),
    name: getRandomElement(names),
  };
};

const usersComments = () => Array.from( { length: getRandomInt(0, COMMENTS_MAX_NUMBER) }, (_, index) => createComment(index + 1));

const createPhotoDescription = function(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: 'Эта фотография заряжена положительной энергией. Если смотреть на нее 59 сек трижды в день, то Ваша жизнь измениться. Но это не точно.',
    likes: getRandomInt(LIKES_MIN, LIKES_MAX),
    comments: usersComments(),
  };
};

const photos = Array.from({length: OBJECTS_NUMBER}, (_, index) => createPhotoDescription(index + 1));

export {photos};
