const burger = document.querySelector(".hamburger");
const sidenavInner = document.querySelector(".sidenav");

function toogleNav() {
  burger.classList.toggle("is-active");
  sidenavInner.classList.toggle("show");
}

// eslint-disable-next-line import/prefer-default-export
export { toogleNav };
