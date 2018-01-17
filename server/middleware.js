const email = new RegExp(
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
);
const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const username = /[a-zA-Z][a-zA-Z0-9.-_]{5,31}/;

module.exports.authUser = function(req, res, next) {
  if (password.test(req.body.password) && email.test(req.body.email)) {
    //send request to firebase
    Object.assign(req.app.locals.defaults, {
      userLoggedin:true,
      topbarColor: "success"
    });
    next();
  } else {
    Object.assign(req.app.locals.defaults, {
      topbarColor: "warning",
      alert: {
        color: "danger",
        message:
          "<b>Failure!</b> something went wrong with your credentials, please check again"
      }
    });
    next();
  }
};

module.exports.registerUser = function(req, res, next) {
  if (
    password.test(req.body.password) &&
    email.test(req.body.email) &&
    username.test(req.body.username)
  ) {
    //send request to firebase
    Object.assign(req.app.locals.defaults, {
      alert: {
        color: "success",
        message: "<b>Success!</b> please check your email to complete registration"
      }
    });
    next();
  } else {
    Object.assign(req.app.locals.defaults, {
      topbarColor: "warning",
      alert: {
        color: "danger",
        message: "<b>Failure!</b> something went wrong with your credentials, please check again"
      }
    });
    next();
  }
};
