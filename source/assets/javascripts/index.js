// import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import flatpickr from "flatpickr";
import intlTelInput from 'intl-tel-input';

// components JS files
import { openNav, closeNav } from './components/mobile_nav';
import './components/nav_color';
import './components/form-validation';


// nav mobile
const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");
navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);


// date picker init
flatpickr(".datepicker", {
  dateFormat: "d/m/Y"
});

// tel input init
const input = document.querySelector("#phone");
intlTelInput(input);

// carousel js
// $('.carousel').carousel({
//   interval: 11000
// });
