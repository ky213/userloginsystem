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
    if (field.id === "confirmPassword") field.pattern = $("#password").val();
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
  /* Check form validity and then return */
  return validFields.length === inputs.length;
}

export function buttonAnimation(button, animationType) {
  if (animationType === "initial") {
    $(button)
      .text("submit")
      .attr("class", "btn btn-block btn-gray");
  }
  if (animationType === "spin") {
    let icon = $("<i class='fa fa-spinner fa-spin fa-pulse fa-fw fa-lg'></i>");
    $(button)
      .html(icon)
      .attr("class", "btn btn-block btn-gray");
  }
  if (animationType === "success") {
    let icon = $("<i class='fa fa-check fa-lg'></i>");
    $(button)
      .html(icon)
      .attr("class", "btn btn-block btn-success");
  }
}

export async function submitForm(form) {
  let data = {};

  $(form)
    .find(
      "#username, #email, #password, #loginEmail, #loginPassword, #rememberMe"
    )
    .each(function(index, field) {
      data[field.id] = field.value;
    });
  return await $.ajax({
    type: "post",
    url: form.action,
    data: data,
    success: function(response) {
      return response;
    },
    error: function(error) {
      return error;
    }
  });
}

export function showAlert(alertBox, type, message) {
  alertBox.text("- " + message);
  alertBox.removeClass();
  alertBox.addClass("alert alert-" + type);
}

export function removeAlert(alertBox) {
  alertBox.text("");
  alertBox.removeClass();
}

export function alterTopbar(status) {
  if (status === "loggedIn") {
    $("#topBar")
      .removeClass("bg-warning")
      .addClass("bg-success");
    $("#socialIcons")
      .find("a")
      .addClass("text-dark");
    $("#authButtons")
      .find("a")
      .addClass("text-dark");
    $("#loginLink, #registerLink").addClass("d-none")
    $("#logoutLink, #dashboardLink").removeClass("d-none")
  } else {
    $("#topBar")
    .removeClass("bg-success")
    .addClass("bg-warning");
  $("#socialIcons")
    .find("a")
    .removeClass("text-dark");
  $("#authButtons")
    .find("a")
    .removeClass("text-dark");
    $("#loginLink, #registerLink").removeClass("d-none")
    $("#logoutLink, #dashboardLink").addClass("d-none")
  }
}
