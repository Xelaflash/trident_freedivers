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

// carousel js
// $('.carousel').carousel({
//   interval: 11000
// });

// remove reinsurance for mobile (except homepage)
const currentPage = document.location.pathname;
const reinsurance = document.querySelector(".reinsurance");

if (window.innerWidth <= 812 && currentPage !== "/") {
  reinsurance.style.display = 'none';
}
