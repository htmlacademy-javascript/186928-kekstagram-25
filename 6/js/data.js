import {getPhotos} from './temp-data.js';

const OBJECTS_NUMBER = 25;
const COMMENTS_MAX_NUMBER = 10;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const COMMENTS_IMG_WIDTH = 35;
const COMMENTS_IMG_HEIGHT = 35;

const messages = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Луселия Сантус', 'Сузана Виейра', 'Маркус Палмейра', 'Каролина Дикманн', 'Вивиан Пазмантер', 'Мурилу Бенисиу', 'Джованна Антонелли'];

const photos = getPhotos();

export { names, messages, OBJECTS_NUMBER, COMMENTS_MAX_NUMBER, LIKES_MIN, LIKES_MAX, AVATAR_MIN, AVATAR_MAX, COMMENTS_IMG_WIDTH, COMMENTS_IMG_HEIGHT, photos};
