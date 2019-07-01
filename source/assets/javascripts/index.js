/* eslint-disable func-names */
import 'popper.js';
import 'bootstrap';
import flatpickr from "flatpickr";

// components JS files
import './components/nav_color';
import './components/form-validation';
import './components/modal-validation';
import './components/back_to_top';
import { toogleNav } from './components/mobile_nav';
import { handleFirstTab } from './components/keyboard_focus';

import './plugins/intl_nbr';
import './plugins/anim_letters';


// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// Sidenav
const sidenavTrigger = document.getElementById("sidenav-trigger");
sidenavTrigger.addEventListener("click", toogleNav);


// date picker init
flatpickr(".datepicker", {
  dateFormat: "m/d/Y"
});


// remove reinsurance for mobile (except homepage)
const currentPage = document.location.pathname;
const reinsurance = document.querySelector(".reinsurance");
if (window.innerWidth <= 812 && currentPage !== "/") {
  reinsurance.style.display = 'none';
}


// body scroll lock for touch device when modal/sidenav open
const targetElementModal = document.querySelector('#modalBookingForm');

$(targetElementModal).on('shown.bs.modal', () => {
  $('body').addClass('freezePage');
});
$(targetElementModal).on('hidden.bs.modal', () => {
  $('body').removeClass('freezePage');
});


// flip card effect for touch screen devices
let touchPos;
document.querySelectorAll(".card-inner").forEach((card) => {
  card.addEventListener("touchstart", (event) => {
    console.log("touch start begin");
    event.preventDefault();
    touchPos = document.body.scrollTop;
    console.log(touchPos);
  });
  card.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log(e.type);
    console.log(document.body.scrollTop);
    if (e.type === 'touchend' && (Math.abs(touchPos - document.body.scrollTop) > 3)) {
      alert("this is a scroll");
    } else {
      alert("c'est un click");
      e.currentTarget.classList.toggle('card-hover-effect');
    }
  });
});
