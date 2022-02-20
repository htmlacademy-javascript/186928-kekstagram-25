function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0) {
    return Error;
  }
  if(min === max) {return min;}
  if(min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isRelevantLength(currentStroke, maxLength) {
  if (maxLength < 1 || !(typeof currentStroke === 'string')) {
    return Error;
  }
  let isRelevant;
  isRelevant = currentStroke.length > maxLength ? isRelevant = false : isRelevant = true;
  return isRelevant;
}

getRandomInt(1, 108);
isRelevantLength('12345678', 8);
