import { fieldValidation, formValidation, buttonAnimation } from "./functions";

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

// Facebook login
$("#facebook").on("click", function() {
  buttonAnimation("#facebook", "spin");
  const socialForm = $("#socialForm");
  const uid = socialForm.children("[name='uid']");
  const token = socialForm.children("[name='token']");
  const status = socialForm.children("[name='status']");

  FB.login(function(response) {
    // Send data uppon response
    uid.val(response.authResponse.userID);
    token.val(response.authResponse.accessToken);
    status.val(response.status);

    socialForm.submit();
  });
});
