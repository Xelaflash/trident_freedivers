import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

// components JS files
import { openNav, closeNav } from './components/mobile_nav';

const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");

navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

$('.carousel').carousel({
  interval: 9000
});
