const validationMessages = {
  text:
    "- Allowed: periods, hyphens, and underscores<br>- The first character is a letter, and only alphanumeric characters<br>- 6-32 characters long",
  email: "- Invalid email adress",
  password:
    "- at least 8 characters <br>- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number <br>- Can contain special characters "
};

export function formValidation(form) {
  const inputs = $(form).find(
    "input[type='email'],input[type='password'], input[type='text']"
  );

  $(form).addClass("was-validated");
  inputs.each(function(index, element) {
    if (element.validity.valueMissing) {
      $(element)
        .next(".invalid-feedback")
        .html("This field is required");
    } else {
      $(element)
        .next(".invalid-feedback")
        .html(validationMessages[element.type]);
    }

    if (index === 3) {
      element.pattern = inputs[2].value;
      if (element.validity.patternMismatch) {
        $(element)
          .next(".invalid-feedback")
          .html("Passwords don't match");
      }
    }
  });
}
