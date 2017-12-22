import { formValidation } from "./functions";

$("#loginForm").on("submit", function(e) {
  e.preventDefault();
  console.log(e);
  formValidation(this);
});

$("#registrationForm").on("submit", function(e) {
  e.preventDefault();
  formValidation(this);
});
