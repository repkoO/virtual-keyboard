import keyboardEN from './keys.js';

const BODY = document.body;
const MAINPAGE = document.createElement('div');
const KEYBOARD = document.createElement('div');
const TITLE = document.createElement('h1');
const TEXTAREA = document.createElement('textarea');
const KEYBOARDDIV = document.createElement('div');

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
