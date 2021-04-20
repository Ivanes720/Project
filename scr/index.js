
import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import timer from './modules/timer';
import slider from './modules/slider';
import modals from './modules/modals';
import forms from './modules/forms';
import {openModal} from './modules/modals';


window.addEventListener('DOMContentLoaded', function () {
  const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 300000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  calc();
  timer('.timer', '2021-06-01');
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  modals('[data-modal]', '.modal', modalTimerId);
  forms('form', modalTimerId);
  cards();
});


