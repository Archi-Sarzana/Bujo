
$(document).ready(function () {
  $("#input_submit").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    // email must contain @ and .
    if (email.indexOf("@") < 0 || email.indexOf(".") < 0) {
      alert("Invalid email");
      return;
    }

    // validate password
    // allow password to be between 5 and 16 characters
    else if (!(password.length >= 5n && password.length <= 16)) {
      alert("Password must be between 5 and 16 characters");
      return;
    } else {
      window.location.href = "home.html";
      // function Redirect() {
    }
  });
});
