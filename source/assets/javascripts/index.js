import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

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
