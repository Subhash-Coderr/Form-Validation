
function data() {
  var a = document.getElementById("no1").value;
  var b = document.getElementById("no2").value;
  var c = document.getElementById("no3").value;
  var d = document.getElementById("no4").value;

  if (a == "" || b == "" || c == "" || d == "") {
    Swal.fire({
      icon: "error",
      title: "Empty field",
      text: "Something went wrong! fill the all fields",
      footer: '<a href="">Why do I have this issue?</a>'
    });

    return false;
  } else {
    Swal.fire({
      icon: "success",
      title: "Loged in",
      text: "Successfully! Your account is loged in",
      footer: '<a href="">Cancel</a>'
    });
    return false
  }
}



