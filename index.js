import { keyboardEN, keyboardRU } from './keys.js';

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
        button.setAttribute('ID', 'backspace');
        button.classList.add('image__button', 'wide');
        break;
      case 'Enter':
        button.classList.add('image__button', 'wide');
        break;
      case 'Tab':
        button.classList.add('image__button', 'wide');
        break;
      case 'Shift':
        button.setAttribute('ID', 'Shift');
        button.classList.add('image__button', 'wide');
        break;
      case 'Control':
        button.classList.add('image__button', 'wide');
        break;
      case 'Alt':
        button.classList.add('image__button', 'wide');
        break;
      case 'ArrowUp':
        button.innerHTML = '^';
        button.classList.add('image__button');
        break;
      case 'ArrowDown':
        button.innerHTML = '^';
        button.classList.add('image__button');
        break;
      case 'ArrowLeft':
        button.innerHTML = '&lt;';
        button.classList.add('image__button');
        break;
      case 'ArrowRight':
        button.innerHTML = '^';
        button.classList.add('image__button');
        break;
      default:
        button.setAttribute('type', 'button');
        button.classList.add('image__button');
    }
    if (key === 'space') {
      button.classList.add('extra__wide', 'image__button');
      button.setAttribute('ID', 'space');
    } else if (key === 'CapsLock') {
      button.classList.add('caps__wide', 'image__button');
      button.setAttribute('ID', 'caps');
    }
  });
};
createKeys(keyboardEN);

// функция вставки при клике
const byClick = () => {
  const button = document.querySelectorAll('.image__button');
  KEYBOARDDIV.addEventListener('mousedown', (e) => {
    for (let i = 0; i < button.length; i += 1) {
      if (e.code === 'backspace') {
        TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 1);
      } else if (e.target.textContent === button[i].textContent) {
        button[i].classList.add('active');
        TEXTAREA.value += e.target.textContent;
      }
    }
  });
  KEYBOARDDIV.addEventListener('mouseup', (e) => {
    for (let i = 0; i < button.length; i += 1) {
      if (e.target.textContent === button[i].textContent) {
        button[i].classList.remove('active');
      }
    }
  });
};
byClick();

// функция вставки при нажатии
const byKey = () => {
  const button = document.querySelectorAll('.image__button');
  const backSpace = document.querySelector('#backspace');
  const spaceKey = document.querySelector('#space');
  const capsKey = document.querySelector('#caps');
  document.addEventListener('keydown', (e) => {
    for (let i = 0; i < button.length; i += 1) {
      if (e.key === button[i].textContent) {
        button[i].classList.add('active');
      } else if (e.code === 'Space') {
        spaceKey.classList.add('active');
      } else if (e.code === 'Capslock') {
        capsKey.classList.toggle('active');
      } else if (e.code === 'Backspace') {
        backSpace.classList.add('active');
      }
    }
    TEXTAREA.focus();
    TEXTAREA.textContent += e.key;
  });
  document.addEventListener('keyup', (e) => {
    for (let i = 0; i < button.length; i += 1) {
      if (e.key === button[i].textContent) {
        button[i].classList.remove('active');
      } else if (e.code === 'Space') {
        spaceKey.classList.remove('active');
      } else if (e.code === 'Backspace') {
        backSpace.classList.remove('active');
      }
    }
  });
};
byKey();

// shiftbyclick
const shiftUpperCase = () => {
  const shiftKey = document.querySelector('#Shift');
  shiftKey.addEventListener('click', (e) => {
    const button = document.querySelectorAll('.image__button');
    button.forEach((key) => {
      key.classList.toggle('upper');
      TEXTAREA.value = e.target.textContent.toUpperCase();
    });
  });
};
shiftUpperCase();

// Сaps
