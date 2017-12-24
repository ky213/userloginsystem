import { fieldValidation, formValidation } from "./functions";

$("#registrationModal").on("shown.bs.modal", function() {
  const loginForm = $(this).find("#loginForm");
  const formFields = loginForm.find("input");

  formFields.each(function(index, field) {
    $(field).on("focus", function() {
      $(field).on("keyup change", function() {
        fieldValidation(field);
      });
    });
  });
});

$("#loginModal").on("shown.bs.modal", function() {
  const loginForm = $(this).find("#loginForm");
  const formFields = loginForm.find("[type='email'],[type='password']");

  formFields.each(function(index, field) {
    $(field).on("focus", function() {
      $(field).on("keyup change", function() {
        fieldValidation(field);
      });
    });
  });
});
/* Remove registration form event listeners */
$("#registrationModal").on("hidden.bs.modal", function() {
  const registrationForm = $(this).find("#registrationForm");
  const formFields = registrationForm.find("input");

  formFields.each(function(index, field) {
    $(field).off();
  });
});
/* Remove login form event listeners */
$("#loginModal").on("hidden.bs.modal", function() {
  const loginForm = $(this).find("#loginForm");
  const formFields = loginForm.find("[type='email'],[type='password']");

  formFields.each(function(index, field) {
    $(field).off();
  });
});

$("#registrationForm").on("submit", function(e) {
  e.preventDefault();
  console.log(this.id + " is valid:" + formValidation(this));
});

$("#loginForm").on("submit", function(e) {
  e.preventDefault();
  console.log(this.id + " is valid:" + formValidation(this));
});
