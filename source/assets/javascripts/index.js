// import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'select2';


// components JS files
import { openNav, closeNav } from './components/mobile_nav';
import './components/nav_color';
import './components/form-validation';

const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");

navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// carousel js
// $('.carousel').carousel({
//   interval: 11000
// });

var button = document.getElementById('mainButton');

var openForm = function () {
  button.className = 'active';
};

var checkInput = function (input) {
  if (input.value.length > 0) {
    input.className = 'active';
  } else {
    input.className = '';
  }
};

var closeForm = function () {
  button.className = '';
};

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27 || e.keyCode == 13) {
    closeForm();
  }
});
