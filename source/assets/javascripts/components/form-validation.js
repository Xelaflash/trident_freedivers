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


function showValidate(input) {
  const parentDiv = $(input).parent();
  $(parentDiv).addClass('alert-validate alert-form-validation');
}

function hideValidate(input) {
  const parentDiv = $(input).parent();
  $(parentDiv).removeClass('alert-validate alert-form-validation');
}

function validateForm() {
  let check = true;

  if ($(name).val().trim() === '') {
    showValidate(name);
    check = false;
  }

  if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    showValidate(email);
    check = false;
  }

  if ($(message).length > 0 && $(message).val().trim() === '') {
    showValidate(message);
    check = false;
  }

  if ($(subject).length > 0 && $(subject).val().trim() === '') {
    showValidate(subject);
    check = false;
  }

  return check;
}


$('.validate-form').on('click', '.contact-form-submit', function (e) {
  const validated = validateForm();
  if (validated === false) {
    e.preventDefault();
  } else {
    $('.validate-form').submit();
  }
});


$('.validate-form, .form-input').each(function () {
  $(this).focus(function () {
    hideValidate(this);
  });
});
