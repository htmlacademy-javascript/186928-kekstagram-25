const imgPreviewContainer = document.querySelector('.img-upload__preview');
const imgPreview = imgPreviewContainer.querySelector('img');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectsValue = document.querySelector('.effect-level__value');
const originalFilter = document.querySelector('#effect-none');

//функция создания объектов настройки для обновления noUiSlider
function createEffectOptions(min, max, step) {
  return {
    range: {
      'min': min,
      'max': max,
    },
    'start': max,
    'step': step,
  };
}
// объекты настройки для обновления noUiSlider
const chrome = createEffectOptions(0, 1, 0.1);
const sepia = createEffectOptions(0, 1, 0.1);
const marvin = createEffectOptions(0, 100, 1);
const phobos = createEffectOptions(0, 3, 0.1);
const heat = createEffectOptions(1, 3, 0.1);

// переменная для хранения текущего значения value радиокнопки (input[type=radio].value)
let currentFilter = 'none';

// объект, для связки объекта настройки и value радиокнопки (input[type=radio].value)
const effectsOptions = {
  'chrome': chrome,
  'sepia': sepia,
  'marvin': marvin,
  'phobos': phobos,
  'heat': heat,
};

// объект, для связки значения CSS-свойства filter и value радиокнопки (input[type=radio].value)
const effectsFilters = {
  'chrome': 'grayscale',
  'sepia': 'sepia',
  'marvin': 'invert',
  'phobos': 'blur',
  'heat': 'brightness',
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  start: 1,
  connect: 'lower',
});

sliderContainer.classList.add('hidden');

// функция для установки значения свойства filter загруженной картинки picture.style.filter
const setImgFilterValue = (picture, filter) => {
  let units = '';

  if(effectsFilters[filter] === 'invert') { // % и px - добавляем необходимые символы к соответствующим значениям для корректной работы свойства filter
    units = '%';
  }
  if(effectsFilters[filter] === 'blur') {
    units = 'px';
  }
  picture.style.filter = `${effectsFilters[filter]}(${slider.noUiSlider.get()}${units})`;
  if(filter === 'none') {
    picture.style.filter = '';
  }
};

const addEffectToImg = (filter) => {
  if(filter === 'none') {
    imgPreview.className = '';
  }
  imgPreview.className = '';
  imgPreview.classList.add(`effects__preview--${filter}`);
};

const updateSlider = (currentSlider, filter) => {
  if( !effectsOptions[filter] ) {
    sliderContainer.classList.add('hidden');
    setImgFilterValue(imgPreview, filter);
    return null;
  }
  if( sliderContainer.classList.contains('hidden') ) {
    sliderContainer.classList.remove('hidden');
  }
  const currentOption = effectsOptions[filter];
  currentSlider.noUiSlider.updateOptions(currentOption);
};

slider.noUiSlider.on('update', () => {
  effectsValue.value = slider.noUiSlider.get();
  setImgFilterValue(imgPreview, currentFilter);
});

// список, содержащий радикнопки
const effectsList = document.querySelector('.effects__list');

// Обработчик события change на всем списке
const setFilters = () => {
  effectsList.addEventListener('change', (evt) => {
    if(evt.target.closest('input[type=radio]')){
      const effect = evt.target;
      const filter  = effect.value;
      currentFilter = filter;

      addEffectToImg(filter);
      setImgFilterValue(imgPreview, filter);
      updateSlider(slider, filter);
    }
  });
};

const resetUploadImgValues = () => {
  updateSlider(slider, originalFilter.value);
  addEffectToImg(originalFilter.value);
  originalFilter.checked = true;
};

export { setFilters, resetUploadImgValues };
