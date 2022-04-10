const OBJECTS_NUMBER = 25;
const COMMENTS_MAX_NUMBER = 10;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const COMMENTS_IMG_WIDTH = 35;
const COMMENTS_IMG_HEIGHT = 35;
const TEXT_DESCRIPTION_MAX_LENGTH = 140;
const HASHTAGS_MAX_NUMBER = 5;
const COMMENTS_UPLOAD_NUMBER = 5;
const SCALE_STEP = 25;
const PHOTO_ZOOM_MAX_VALUE = 100;
const PHOTO_ZOOM_MIN_VALUE = 25;
const SCALE_START_VALUE = 100;
const ALERT_SHOW_TIME = 3000;
const RANDOM_PHOTOS_NUMBER = 10;
const RERENDER_DELAY = 2500;

const dataSrc = 'https://25.javascript.pages.academy/kekstagram/data';
const sendDataSrc = 'https://25.javascript.pages.academy/kekstagram';

const messages = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Луселия Сантус', 'Сузана Виейра', 'Маркус Палмейра', 'Каролина Дикманн', 'Вивиан Пазмантер', 'Мурилу Бенисиу', 'Джованна Антонелли'];

export { names, messages, OBJECTS_NUMBER, COMMENTS_MAX_NUMBER, LIKES_MIN, LIKES_MAX, AVATAR_MIN, AVATAR_MAX, COMMENTS_IMG_WIDTH, COMMENTS_IMG_HEIGHT, TEXT_DESCRIPTION_MAX_LENGTH, HASHTAGS_MAX_NUMBER, COMMENTS_UPLOAD_NUMBER, SCALE_STEP, PHOTO_ZOOM_MAX_VALUE, PHOTO_ZOOM_MIN_VALUE, SCALE_START_VALUE, ALERT_SHOW_TIME, dataSrc, sendDataSrc, RANDOM_PHOTOS_NUMBER, RERENDER_DELAY };
