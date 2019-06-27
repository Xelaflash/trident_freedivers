/* eslint-disable func-names */
import 'popper.js';
import 'bootstrap';
import flatpickr from "flatpickr";
// import $ from 'jquery';

// components JS files
import './components/nav_color';
import './components/form-validation';
import './components/modal-validation';
import './components/back_to_top';
import { toogleNav } from './components/mobile_nav';
import { handleFirstTab } from './components/keyboard_focus';

import './plugins/intl_nbr';


// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// Sidenav
const sidenavTrigger = document.getElementById("sidenav-trigger");
sidenavTrigger.addEventListener("click", toogleNav);

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
