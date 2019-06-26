/* eslint-disable func-names */
import 'popper.js';
import 'bootstrap';
import flatpickr from "flatpickr";


// components JS files
import { openNav, closeNav } from './components/mobile_nav';
import './components/nav_color';
import './components/form-validation';
import './components/modal-validation';
import './components/back_to_top';

import './plugins/intl_nbr';


// nav mobile
const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");
navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);


// date picker init
flatpickr(".datepicker", {
  dateFormat: "d/m/Y"
});

// remove reinsurance for mobile (except homepage)
const currentPage = document.location.pathname;
const reinsurance = document.querySelector(".reinsurance");

if (window.innerWidth <= 812 && currentPage !== "/") {
  reinsurance.style.display = 'none';
}

// function handleTab(e) {
//   if (e.keyCode === 9) { // "hey I am a keyboard user"
//     document.body.classList.add('user-tabbing');
//     window.removeEventListener('keydown', handleTab);
//   }
// }

// window.addEventListener('keydown', handleTab);


function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}
window.addEventListener('keydown', handleFirstTab);
