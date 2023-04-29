import keyboardEN from './keys.js';

const BODY = document.body;
const MAINPAGE = document.createElement('div');
const KEYBOARD = document.createElement('div');
const TITLE = document.createElement('h1');
const TEXTAREA = document.createElement('textarea');
const KEYBOARDDIV = document.createElement('div');

// функция создания элементов на странице//
const init = () => {
  MAINPAGE.classList.add('container');
  KEYBOARD.classList.add('keyboard-container');
  KEYBOARDDIV.classList.add('keyboard');
  TITLE.textContent = 'Virtual Keyboard';
  BODY.insertAdjacentElement('afterbegin', MAINPAGE);
  MAINPAGE.append(KEYBOARD);
  KEYBOARD.append(TITLE);
  KEYBOARD.append(TEXTAREA);
  KEYBOARD.append(KEYBOARDDIV);
};

init();

// функция создания клавиш
const createKeys = (keys) => {
  keys.forEach((key) => {
    const button = document.createElement('button');
    button.textContent = key;
    KEYBOARDDIV.append(button);
    switch (key) {
      case 'backspace':
        button.classList.add('image__button', 'wide');
        break;
      case 'Enter':
        button.classList.add('image__button', 'wide');
        break;
      case 'Tab':
        button.classList.add('image__button', 'wide');
        break;
      case 'Shift':
        button.classList.add('image__button', 'wide');
        break;
      case 'Control':
        button.classList.add('image__button', 'wide');
        break;
      case 'Alt':
        button.classList.add('image__button', 'wide');
        break;
      default:
        button.classList.add('image__button');
    }
    if (key === 'space') {
      button.classList.add('extra__wide');
    } else if (key === 'CapsLock') {
      button.classList.add('caps__wide');
    }
  });
};

createKeys(keyboardEN);
