const btn = $('.back_to_top');

$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

$(document).ready(() => {
  $(".back_to_top").click((event) => {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
});
