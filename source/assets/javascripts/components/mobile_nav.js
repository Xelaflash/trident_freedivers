const navBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".closebtn");

function openNav() {
  document.querySelector(".sidenav").style.width = "100%";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}

navBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
