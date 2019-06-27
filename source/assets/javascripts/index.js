/* eslint-disable func-names */
import 'popper.js';
import 'bootstrap';
import flatpickr from "flatpickr";
import $ from 'jquery';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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

// disable scroll when modal open
$(targetElementModal).on('shown.bs.modal', () => {
  console.log("scroll disable");
  disableBodyScroll(targetElementModal);
});

// re-enable scroll when modal close
$(targetElementModal).on('hidden.bs.modal', () => {
  console.log("scroll ok");
  enableBodyScroll(targetElementModal);
});
