window.addEventListener('DOMContentLoaded', function () {
  const tabs=require('./modules/tabs'),
  calc=require('./modules/calc'),
  cards=require('./modules/cards'),
  timer=require('./modules/timer'),
  slider=require('./modules/slider'),
  modals=require('./modules/modals'),
  forms=require('./modules/forms');

  tabs();
  calc();
  timer();
  slider();
  modals();
  forms();
  cards();
});


