const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    throw new Error('Ошибка ввода данных. Введите положительные числа.');
  }
  if(min > max) {
    [min, max] = [max, min]; //Разобрался сам, ознакомившись с деструктуризацией, в точности совпало с твоим решением, спасибо за совет ))
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isRelevantLength = (currentStroke, maxLength) => {
  if (maxLength < 1 || typeof currentStroke !== 'string') {
    throw new Error('Ошибка ввода данных. Введите строку.');
  }
  return currentStroke.length <= maxLength;
};

const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export {getRandomInt, isRelevantLength, getRandomElement};
