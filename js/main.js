function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    throw new Error('Ошибка ввода данных. Введите положительные числа.');
  }
  if(min > max) {
    [min, max] = [max, min]; //Разобрался сам, ознакомившись с деструктуризацией, в точности совпало с твоим решением, спасибо за совет ))
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isRelevantLength(currentStroke, maxLength) {
  if (maxLength < 1 || typeof currentStroke !== 'string') {
    throw new Error('Ошибка ввода данных. Введите строку.');
  }
  return currentStroke.length <= maxLength;
}

isRelevantLength(' ', 1); // заглушка, чтобы линтер не возмущался

const OBJECTS_NUMBER = 25;
const COMMENTS_MAX_NUMBER = 10;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;


const messages = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Луселия Сантус', 'Сузана Виейра', 'Маркус Палмейра', 'Каролина Дикманн', 'Вивиан Пазмантер', 'Мурилу Бенисиу', 'Джованна Антонелли'];

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

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

photos.forEach( (e) => {console.log(e)} ); // заглушка, чтобы линтер не возмущался
