import $ from 'jquery';
import anime from 'animejs';

function animeLetters() {
  // eslint-disable-next-line func-names
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

window.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(animeLetters, 1000);
});
