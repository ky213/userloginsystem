import { fieldValidation, formValidation } from "./functions";

const registrationForm = $("#registrationForm");
const formFields = registrationForm.find("input");

// Fields listeners
formFields.each(function(index, field) {
  $(field).on("focus", function() {
    fieldValidation(field);
  });
  $(field).on("keyup change", function() {
    fieldValidation(field);
  });
});

// Form validation
$("#registrationForm").on("submit", function(e) {
  e.preventDefault();
  let validForm = formValidation(this);

  if (validForm) this.submit();

  return false;
});
