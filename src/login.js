import { fieldValidation, formValidation } from "./functions";

const loginForm = $("#loginForm");
const formFields = loginForm.find("[type='email'],[type='password']");

// Fields liteners
formFields.each(function(index, field) {
  $(field).on("focus", function() {
    $(field).on("keyup change", function() {
      fieldValidation(field);
    });
  });
});

// Form validation
$("#loginForm").on("submit", function(e) {
  e.preventDefault();
  let validForm = formValidation(this);

  if (validForm) this.submit();

  return false;
});
