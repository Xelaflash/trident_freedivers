import $ from 'jquery';
import anime from 'animejs';


const sUsrAg = navigator.userAgent;
let sBrowser;
// The order matters here, and this may report false positives for unlisted browsers.
if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
} else {
  sBrowser = "unknown";
}

function animeLetters() {
  // eslint-disable-next-line func-names
  if (sBrowser !== "Apple Safari") {
    $('.ml2').each(function () {
      $(this).html($(this).text().replace(/([^\x00-\x80]|\S)/g, "<span class='letter'>$&</span>"));
    });
    anime.timeline({
      loop: 1
    }).add({
      targets: '.ml2 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 1200,
      delay(_el, i) {
        return 150 * i;
      }
    }).add({
      targets: '.ml2',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      loop: 1
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(animeLetters, 1000);
});
