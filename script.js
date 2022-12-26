function validate() {
  var text = document.getElementById("text");
  var password = document.getElementById("pass");
  var cpassword = document.getElementById("conpass");
  var check = document.getElementById("check");

  //   name section

  if (text.value.trim() == "") {
    alert("Fill User Names");
    return false;
  }

  //   password section
  else if (password.value.trim() == "" || cpassword.value.trim() == "") {
    alert("Fill Password");
    return false;
  } else if (password.value.trim().length < 6) {
    alert("Password is too short,Enter Above 6 Charecters");
    return false;
  } else if (password.value != cpassword.value) {
    alert("Enter Correct Password");
    return false;
  }
}
