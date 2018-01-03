import {
  fieldValidation,
  formValidation,
  buttonAnimation,
  submitForm,
  showAlert,
  removeAlert,
  alterTopbar
} from "./functions";
import { WSAEHOSTDOWN } from "constants";

$("#registrationModal").on("shown.bs.modal", function() {
  const registrationForm = $(this).find("#registrationForm");
  const formFields = registrationForm.find("input");

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
  const passwordResetForm = $(this).find("#passwordResetForm");
  const formFields = loginForm.find("[type='email'],[type='password']");

  formFields.each(function(index, field) {
    $(field).on("focus", function() {
      $(field).on("keyup change", function() {
        fieldValidation(field);
      });
    });
  });

  loginForm.find("#rememberMe").on("change", function() {
    this.value === "off" ? (this.value = "on") : (this.value = "off");
  });

  loginForm.find("#passwordReset").on("click", function() {
    loginForm.attr("hidden", true);
    passwordResetForm.attr("hidden", false);

    return false;
  });

  passwordResetForm.find("#backButton").on("click", function() {
    loginForm.attr("hidden", false);
    passwordResetForm.attr("hidden", true);

    return false;
  });
});
/* Remove registration form event listeners */
$("#registrationModal").on("hidden.bs.modal", function() {
  const registrationForm = $(this).find("#registrationForm");
  const registrationButton = registrationForm.find("button[type=submit]");
  const formFields = registrationForm.find("input");

  buttonAnimation(registrationButton, "initial");
  removeAlert($("#registrationAlert"));
  formFields.each(function(index, field) {
    $(field).removeClass("is-valid is-invalid");
    $(field).off();
  });
});
/* Remove login form event listeners */
$("#loginModal").on("hidden.bs.modal", function() {
  const loginForm = $(this).find("#loginForm");
  const loginButton = loginForm.find("button[type=submit]");
  const passwordResetForm = $(this).find("#passwordResetForm");
  const formFields = loginForm.find("[type='email'],[type='password']");

  buttonAnimation(loginButton, "initial");
  removeAlert($("#loginAlert"));
  formFields.each(function(index, field) {
    $(field).removeClass("is-valid is-invalid");
    $(field).off();
  });
  loginForm.find("#passwordReset").off();
  passwordResetForm.find("#backButton").off();
  loginForm.find("#rememberMe").off();
});

$("#registrationForm").on("submit", function(e) {
  const submitButton = $(this).find("[type='submit']");
  const validForm = formValidation(this);

  buttonAnimation(submitButton, "spin");
  if (validForm) {
    submitForm(this)
      .then(data => {
        if (data.status == 200) {
          showAlert($("#registrationAlert"), "success", data.message);
          buttonAnimation(submitButton, "success");
          setTimeout(() => {
            $("#registrationModal").modal("hide");
          }, 3000);
        } else {
          showAlert($("#registrationAlert"), "danger", data.message);
          buttonAnimation(submitButton, "initial");
        }
      })
      .catch(err => {
        showAlert($("#registrationAlert"), "danger", err.message);
        buttonAnimation(submitButton, "initial");
      });
  } else {
    buttonAnimation(submitButton, "initial");
  }
  return false;
});

$("#loginForm").on("submit", function(e) {
  const submitButton = $(this).find("[type='submit']");
  let validForm = formValidation(this);

  buttonAnimation(submitButton, "spin");

  if (validForm) {
    submitForm(this)
      .then(data => {
        if (data.status == 200) {
          showAlert($("#loginAlert"), "success", data.message);
          buttonAnimation(submitButton, "success");
          alterTopbar("loggedIn");
          setTimeout(() => {
            $("#loginModal").modal("hide");
          }, 3000);
        } else {
          showAlert($("#loginAlert"), "danger", data.message);
          buttonAnimation(submitButton, "initial");
        }
      })
      .catch(err => {
        showAlert($("#loginAlert"), "danger", err.message);
        buttonAnimation(submitButton, "initial");
      });
  } else {
    buttonAnimation(submitButton, "initial");
  }
  return false;
});

$("#passwordResetForm").on("submit", function(e) {
  const submitButton = $(this).find("[type='submit']");
  const validForm = formValidation(this);

  buttonAnimation(submitButton, "spin");

  if (validForm) {
    submitForm(this)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    buttonAnimation(submitButton, "initial");
  }
  return false;
});
