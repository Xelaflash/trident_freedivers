const nav = document.getElementById("navbar");
console.log(nav);
const currentPage = document.location.pathname;
console.log(currentPage);

if (currentPage === "/spearfishing") {
  nav.style.backgroundColor = "rgba(28, 136, 179, 0.7)";
  console.log('here');
} else if (currentPage === "/contact") {
  nav.style.backgroundColor = "transparent";
}
