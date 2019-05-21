import 'jquery';
import 'popper.js';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min';

// components JS files
import './components/mobile_nav';

console.log("hello here");

const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");

function openNav() {
  console.log("clicked");
  document.querySelector(".sidenav").style.width = "100%";
}

function closeNav() {
    console.log("clicked");
  document.querySelector(".sidenav").style.width = "0";
}

navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

export { openNav, closeNav };
