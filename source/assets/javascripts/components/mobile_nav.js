const burger = document.querySelector(".hamburger");
const sidenavInner = document.querySelector(".sidenav");
const { body } = document;

function toogleNav() {
  burger.classList.toggle("is-active");
  sidenavInner.classList.toggle("show-sidenav");
  if (sidenavInner.classList.contains('show-sidenav')) {
    body.classList.add("freezePage");
  } else {
    body.classList.remove("freezePage");
  }
}

// eslint-disable-next-line import/prefer-default-export
export { toogleNav };
