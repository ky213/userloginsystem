const validationMessages = {
  text:
    "- 6-32 characters long<br>- Allowed: periods, hyphens, and underscores<br>- The first character is a letter, and only alphanumeric characters",
  email: "- Invalid email adress",
  password:
    "- at least 8 characters <br>- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number <br>- Can contain special characters "
};

export function fieldValidation(field) {
  if (field.validity.valid) {
    $(field)
      .addClass("is-valid")
      .removeClass("is-invalid")
      .next(".invalid-feedback")
      .html("");
  } else {
    if (field.id === "password") $("#confirmPassword")[0].pattern = field.value;
    if (field.validity.valueMissing) {
      $(field)
        .addClass("is-invalid")
        .removeClass("is-valid")
        .next(".invalid-feedback")
        .html("- This field is required");
    }
    if (field.validity.patternMismatch) {
      $(field)
        .addClass("is-invalid")
        .removeClass("is-valid")
        .next(".invalid-feedback")
        .html(validationMessages[field.type]);
      if (field.id === "confirmPassword")
        $(field)
          .next(".invalid-feedback")
          .html("- Passwords don't match");
    }
  }
}
export function formValidation(form) {
  const inputs = $(form).find("[type='email'],[type='password'],[type='text']");
  let validFields = [];

  inputs.each(function(index, field) {
    fieldValidation(field);
    if (field.validity.valid) validFields.push(field.id);
  });

  validFields = [...new Set(validFields)];
  /*Return form validity*/
  return validFields.length === inputs.length;
}








