import intlTelInput from 'intl-tel-input';

// tel input init
const input = document.querySelector("#phone");
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");


// here, the index maps to the error code returned from getValidationError -
const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
const phoneNumber = intlTelInput(input, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.2/js/utils.js",
  // utilsScript: "/node_modules/intl-tel-input/build/js/utils.js"
  separateDialCode: true,
  hiddenInput: "full_phone",
  formatOnDisplay: true
});

const telDiv = document.querySelector(".intl-tel-input");
telDiv.setAttribute("data-validate", "Phone is required");


function reset() {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
}

// on blur: validate
input.addEventListener('blur', () => {
  reset();
  if (input.value.trim()) {
    if (phoneNumber.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      const errorCode = phoneNumber.getValidationError();
      if (errorCode === -99) {
        errorMsg.innerHTML = `<i class="fas fa-times"></i> Invalid number`;
      } else {
        errorMsg.innerHTML = `<i class="fas fa-times"></i> ${errorMap[errorCode]}`;
      }
      errorMsg.classList.remove("hide");
    }
  }
  const number = phoneNumber.getNumber();
  input.innerHTML = number;
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);
