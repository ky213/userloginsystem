import {
    fieldValidation,
    formValidation,
    buttonAnimation,
    submitForm,
    showAlert,
    removeAlert,
    alterTopbar
  } from "./functions";
  

$("#passwordResetForm").on("submit", function(e) {
    e.preventDefault();
    let validForm = formValidation(this);
  
    if (validForm) this.submit();
    
    return false;
  });
  