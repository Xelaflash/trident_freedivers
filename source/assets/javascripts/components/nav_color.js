const nav = document.getElementById("navbar");
const currentPage = document.location.pathname;

if (currentPage === "/spearfishing.html") {
  nav.style.backgroundColor = "rgba(28, 136, 179, 0.7)";
} else if (currentPage === "/contact.html") {
  nav.style.backgroundColor = "transparent";
}
