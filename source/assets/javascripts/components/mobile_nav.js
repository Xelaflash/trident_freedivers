import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const burger = document.querySelector(".hamburger");
const sidenavInner = document.querySelector(".sidenav");

function toogleNav() {
  burger.classList.toggle("is-active");
  sidenavInner.classList.toggle("show-sidenav");
  if (sidenavInner.classList.contains('show-sidenav')) {
    console.log('open bg not scrollable');
    disableBodyScroll(sidenavInner);
  } else {
    console.log('close bg scrollable');
    enableBodyScroll(sidenavInner);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { toogleNav };
