const validationMessages = {
  username:
    "- 6-32 characters long<br>- Allowed: periods, hyphens, and underscores<br>- The first character is a letter, and only alphanumeric characters",
  email: "- Invalid email adress",
  password:
    "- at least 8 characters <br>- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number <br>- Can contain special characters "
};

export function formValidation(form) {
  const inputs = $(form).find(
    "input[type='email'],input[type='password'], input[type='text']"
  );
  /* Set error messages */
  $(form).addClass("was-validated");
  inputs.each(function(index, element) {
    if (element.validity.valueMissing) {
      $(element)
        .next(".invalid-feedback")
        .html("This field is required");
    } else {
      $(element)
        .next(".invalid-feedback")
        .html(validationMessages[element.id]);
    }
    /* Check passwordsmatch */
    if (index === 3) {
      element.pattern = inputs[2].value;
      if (element.validity.patternMismatch) {
        $(element)
          .next(".invalid-feedback")
          .html("Passwords don't match");
      }
    }

    /* Check form validity then submit it */
    
  });
}

export function buttonAnimation(button, type, state) {
  const icon = button.find("i");

 
}
