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
const COMMENTS_MAX_NUMBER = 1000;
const messages = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = ['Луселия Сантус', 'Сузана Виейра', 'Маркус Палмейра', 'Каролина Дикманн', 'Вивиан Пазмантер', 'Мурилу Бенисиу', 'Джованна Антонелли'];

const getUniquePositiveNumber = (maxValue) => {
  const usedValues = [];
  return function () {
    let randomValue = getRandomInt(1, maxValue);
    if(!usedValues.length) {
      usedValues.push(randomValue);
      return randomValue;
    }
    while(usedValues.includes(randomValue)) {
      if(usedValues.length === maxValue) {
        throw new Error(`Массив из ${maxValue} уникальных чисел заполнен!`);
      }
      randomValue = getRandomInt(1, maxValue);
    }
    usedValues.push(randomValue);
    return randomValue;
  };
};

const getUniqueId = getUniquePositiveNumber(OBJECTS_NUMBER);
const getUniqueURL = getUniquePositiveNumber(OBJECTS_NUMBER);
const getUniqueCommentId = getUniquePositiveNumber(COMMENTS_MAX_NUMBER);

const createPhotoDescription = function() {
  return {
    id: getUniqueId(),
    url: `photos/${getUniqueURL()}.jpg`,
    description: 'Эта фотография заряжена положительной энергией. Если смотреть на нее 59 сек трижды в день, то Ваша жизнь измениться. Но это не точно.',
    likes: getRandomInt(15, 200),
    comments: {
      id: getUniqueCommentId(),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: messages[getRandomInt(1, messages.length - 1)],
      name: names[getRandomInt(1, names.length - 1)],
    }
  };
};

const photoArray = Array.from({length: OBJECTS_NUMBER}, createPhotoDescription);

photoArray.forEach(()=>{}); // заглушка, чтобы линтер не возмущался
