// import keyboardEN from './keys';

const BODY = document.body;
const MAINPAGE = document.createElement('div');
const KEYBOARD = document.createElement('div');
const TITLE = document.createElement('h1'); // создаем заголовок
const TEXTAREA = document.createElement('textarea'); // создаем поле для ввода
const KEYBOARDDIV = document.createElement('div');

const init = () => {
  MAINPAGE.classList.add('container'); // присваиваем класс диву
  KEYBOARD.classList.add('keyboard-container');
  KEYBOARDDIV.classList.add('keyboard');
  TITLE.innerHTML = 'Virtual Keyboard';
  // вставляем див
  BODY.insertAdjacentElement('afterbegin', MAINPAGE);
  MAINPAGE.append(KEYBOARD);
  KEYBOARD.append(TITLE); // вставляем заголовок
  KEYBOARD.append(TEXTAREA);
  KEYBOARD.append(KEYBOARDDIV);
};

init();
