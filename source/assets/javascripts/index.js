/* eslint-disable func-names */
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
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
const iti = intlTelInput(input, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.2/js/utils.js",
  // utilsScript: "/node_modules/intl-tel-input/build/js/utils.js"
  separateDialCode: true,
  formatOnDisplay: true
});

function reset() {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
}

// on blur: validate
input.addEventListener('blur', function() {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});


// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);


// carousel js
// $('.carousel').carousel({
//   interval: 11000
// });
