/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

$('.book-form-input').each(function () {
  $(this).on('input', function () {
    if ($(this).val().trim() !== "") {
      $(this).addClass('has-val');
    } else {
      $(this).removeClass('has-val');
    }
  });
});

const name = $('.validate-modal-input input[name="name"]');
const email = $('.validate-modal-input input[name="email"]');
const message = $('.validate-modal-input textarea[name="message"]');

const phone = $('.validate-modal-input input[id="phone"]');
const accomodation = $('.validate-modal-input input[name="accomodation"]');
const tour = $('.validate-modal-input select[name="tour"]');
const date = $('.validate-modal-input input[name="date"]');
const finsSize = $('.validate-modal-input input[name="fins size"]');


function showValidate(input) {
  const parentDiv = $(input).parent();
  $(parentDiv).addClass('alert-validate-modal alert-form-validation');
}

function hideValidate(input) {
  const parentDiv = $(input).parent();
  $(parentDiv).removeClass('alert-validate-modal alert-form-validation');
}

function validateForm() {
  let check = true;

  if ($(name).val().trim() === '') {
    showValidate(name);
    check = false;
  }

  if ($(email).val().trim().match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    showValidate(email);
    check = false;
  }

  if ($(message).length > 0 && $(message).val().trim() === '') {
    showValidate(message);
    check = false;
  }

  if ($(phone).length > 0 && $(phone).val().trim() === '') {
    showValidate(phone);
    check = false;
  }

  if ($(accomodation).length > 0 && $(accomodation).val().trim() === '') {
    showValidate(accomodation);
    check = false;
  }


  if ($(tour).length > 0 && $(tour).val() === 'Select a tour') {
    showValidate(tour);
    check = false;
  }

  if ($(date).length > 0 && $(date).val().trim() === '') {
    showValidate(date);
    check = false;
  }

  if ($(finsSize).length > 0 && $(finsSize).val().trim() === '') {
    showValidate(finsSize);
    check = false;
  }

  return check;
}


$('.validate-modal-form').on('click', '.modal-form-submit', function (e) {
  const validated = validateForm();
  if (validated === false) {
    e.preventDefault();
  } else {
    $('.validate-modal-form').submit();
  }
});


$('.validate-modal-input, .book-form-input').each(function () {
  $(this).focus(function () {
    hideValidate(this);
  });
});
