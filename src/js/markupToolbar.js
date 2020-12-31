import dishs from './menu.json';
import markup from '../templates/items.hbs';
const markupTemplates = markup(dishs);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', markupTemplates);