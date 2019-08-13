const nav = document.getElementById("navbar");
const currentPage = document.location.pathname;

if (currentPage === "/spearfishing/") {
  nav.style.backgroundColor = "rgba(28, 136, 179, 0.8)";
} else if (currentPage === "/contact/") {
  nav.style.backgroundColor = "transparent";
}
