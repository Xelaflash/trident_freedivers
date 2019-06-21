/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
import $ from 'jquery';


$('.form-input').each(function () {
  $(this).on('input', function () {
    if ($(this).val().trim() !== "") {
      $(this).addClass('has-val');
    } else {
      $(this).removeClass('has-val');
    }
  });
});

const name = $('.validate-input input[name="name"]');
const email = $('.validate-input input[name="email"]');
const subject = $('.validate-input input[name="subject"]');
const message = $('.validate-input textarea[name="message"]');

const phone = $('.validate-input input[name="phone"]');
const accomodation = $('.validate-input input[name="accomodation"]');
const tour = $('.validate-input select[name="tour"]');
const date = $('.validate-input input[name="date"]');
const finsSize = $('.validate-input input[name="fins size"]');

function showValidate(input) {
  const thisAlert = $(input).parent();
  $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
  const thisAlert = $(input).parent();
  $(thisAlert).removeClass('alert-validate');
}

$('.validate-form').on('submit', function () {
  let check = true;

  if ($(name).val().trim() === '') {
    showValidate(name);
    check = false;
  }

  if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    showValidate(email);
    check = false;
  }

  if ($(subject).val().trim() === '') {
    showValidate(subject);
    check = false;
  }

  if ($(message).val().trim() === '') {
    showValidate(message);
    check = false;
  }

  if ($(phone).val().trim() === '') {
    showValidate(phone);
    check = false;
  }

  if ($(accomodation).val().trim() === '') {
    showValidate(accomodation);
    check = false;
  }

  if ($(tour).val().trim() === '') {
    showValidate(tour);
    check = false;
  }

  if ($(date).val().trim() === '') {
    showValidate(date);
    check = false;
  }

  if ($(finsSize).val().trim() === '') {
    showValidate(finsSize);
    check = false;
  }

  return check;
});


$('.validate-form .form-input').each(function () {
  $(this).focus(function () {
    hideValidate(this);
  });
});

// prevent modal closing if validation not ok
// $('#booking-form-btn').click(function (e) {
//   e.preventDefault();
//   $('#modalBookingForm').submit();
// });
