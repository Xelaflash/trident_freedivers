// import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import flatpickr from "flatpickr";

// components JS files
import { openNav, closeNav } from './components/mobile_nav';
import './components/nav_color';
import './components/form-validation';

flatpickr(".datepicker", {});

const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");

navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// carousel js
// $('.carousel').carousel({
//   interval: 11000
// });
