import { fieldValidation, formValidation } from "./functions";

const form = $("#loginForm, #registrationForm, #passwordResetForm");
const formFields = form.find("[type='email'],[type='password'],[type='text']");

// Fields liteners
formFields.each(function(index, field) {
  $(field).on("focus", function() {
    fieldValidation(field);
  });
  $(field).on("keyup change", function() {
    fieldValidation(field);
  });
});

// Form validation
form.on("submit", function(e) {
  e.preventDefault();
  let validForm = formValidation(this);

  if (validForm) this.submit();

  return false;
});
